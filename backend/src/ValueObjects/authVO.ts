export interface ILoginRequest {
  email: string
  password: string
}

export interface ILoginResponse {
  token: string
  user: IUser
}

export interface ISignupRequest {
  firstName: string
  lastName: string
  username: string
  email: string
  password: string
}

export interface IUser {
  id: string
  username: string
  firstName: string
  lastName: string
  email: string
  loginAttempts?: number
  lastAttemptAt?: Date | number
}

export interface IAuthUser extends IUser {
  password: string
}
