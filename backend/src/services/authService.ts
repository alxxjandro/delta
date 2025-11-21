import prisma from '../db'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { ILoginRequest, IAuthUser, ILoginResponse } from '../ValueObjects/authVO'
import { HttpError } from '../errors'

const JWT_SECRET = process.env.JWT_SECRET as string

export async function AuthService({
  email,
  password,
}: ILoginRequest): Promise<ILoginResponse> {
  if (!email || !password) {
    throw new HttpError('An email and password must be provided!', 400)
  }

  const user = (await prisma.users.findFirstOrThrow({
    where: { email: email },
    select: {
      id: true,
      username: true,
      name: true,
      email: true,
      password: true,
    },
  })) as IAuthUser

  if (!user) {
    throw new HttpError('Invalid email or password!', 401)
  }

  const isValidPassword = await bcrypt.compare(password, user.password)
  if (!isValidPassword) {
    throw new HttpError('Invalid email or password!', 401)
  }

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
    },
  }
}
