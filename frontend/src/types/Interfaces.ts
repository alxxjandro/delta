export interface IUser {
  id: string
  name: string
  username: string
  email: string
}

export interface IAuthUser extends IUser {
  password: string
}

export type viewType = 'GRID' | 'LIST'
