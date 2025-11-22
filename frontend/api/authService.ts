import Request from './request.class'
import type { IUser } from '../src/types/Interfaces'

export default class AuthService extends Request {
  static async login(email: string, password: string) {
    const res = await this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    })

    if (res.token) {
      localStorage.setItem('token', res.token)
    }

    return res
  }

  static async signup(data: Partial<IUser>) {
    return this.request('/auth/signup', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  static logout() {
    localStorage.removeItem('token')
  }

  static isAuthenticated() {
    return Boolean(localStorage.getItem('token'))
  }

  static getToken() {
    return localStorage.getItem('token')
  }
}
