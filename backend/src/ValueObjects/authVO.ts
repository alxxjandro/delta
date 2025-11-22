export interface ILoginRequest {
  email: string
  password: string
}

export interface ILoginResponse {
  token: string
  user: IUser
}

export interface ISignupRequest {
  name: string
  username: string
  email: string
  password: string
}

export interface IUser {
  id: string
  username: string
  name: string
  email: string
  loginAttempts?: number
  lastAttemptAt?: Date | number
}

export interface IAuthUser extends IUser {
  password: string
}
