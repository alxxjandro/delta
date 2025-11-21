export interface ILoginRequest {
  email: string
  password: string
}

export interface IUser {
  id: number | string
  username: string
  name: string
  email: string
}

export interface IAuthUser extends IUser {
  password: string
}

export interface ILoginResponse {
  token: string
  user: IUser
}
