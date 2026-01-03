import prisma from '../db'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { HttpError } from '../errors'
import {
  ILoginRequest,
  IAuthUser,
  ILoginResponse,
  ISignupRequest,
  IUser,
} from '../ValueObjects/authVO'

const JWT_SECRET = process.env.JWT_SECRET as string
const COOLDOWN = Number(process.env.COOLDOWN_MS as string)

export async function AuthService({
  email,
  password,
}: ILoginRequest): Promise<ILoginResponse> {
  if (!email || !password) {
    throw new HttpError('An email and password must be provided!', 400)
  }

  const user = (await prisma.users.findFirstOrThrow({
    where: { email: email },
  })) as IAuthUser

  if (!user) {
    throw new HttpError('Invalid email or password!', 401)
  }

  const now = Date.now()
  const lastAttempt = user.lastAttemptAt ?? new Date()
  const last = new Date(lastAttempt).getTime()
  const diff = now - last

  if ((user.loginAttempts || 0) >= 5 && diff < COOLDOWN) {
    throw new HttpError('Too many attempts, try again later', 429)
  }

  if ((user.loginAttempts || 0) >= 50 && diff >= COOLDOWN) {
    await prisma.users.update({
      where: { id: user.id },
      data: { loginAttempts: 0 },
    })
  }

  const isValidPassword = await bcrypt.compare(password, user.password)

  if (!isValidPassword) {
    await prisma.users.update({
      where: { id: user.id },
      data: {
        loginAttempts: { increment: 1 },
        lastAttemptAt: new Date(),
      },
    })

    throw new HttpError('Invalid email or password!', 401)
  }

  await prisma.users.update({
    where: { id: user.id },
    data: {
      loginAttempts: 0,
      lastAttemptAt: new Date(),
    },
  })

  const token = jwt.sign(
    {
      id: user.id,
      nombreUsuario: user.username,
    },
    JWT_SECRET,
    { expiresIn: '7d' }
  )

  return {
    token,
    user: {
      id: user.id,
      username: user.username,
      name: user.name,
      email: user.email,
    } as IUser,
  }
}

export async function SignupService({ name, username, email, password }: ISignupRequest) {
  if (!name || !username || !email || !password) {
    throw new HttpError('Missing details on request!', 400)
  }

  const normalizedEmail = email.trim().toLowerCase()
  const userExist = await prisma.users.findUnique({
    where: { email: normalizedEmail },
  })

  if (userExist) {
    throw new HttpError('Email already registered to an account!', 409)
  }

  const usernameExist = await prisma.users.findUnique({
    where: { username: username },
  })

  if (usernameExist) {
    throw new HttpError('Username already taken!', 409)
  }

  const hashedPassword = await bcrypt.hash(password, 10)
  const newAccount = await prisma.users.create({
    data: {
      name,
      username,
      email: normalizedEmail,
      password: hashedPassword,
    },
  })

  return {
    id: newAccount.id,
    username: newAccount.username,
    name: newAccount.name,
    email: newAccount.email,
  } as IUser
}
