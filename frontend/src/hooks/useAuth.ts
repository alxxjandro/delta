import { useState } from 'react'
import AuthService from '../../api/authService'
import useAuthStore from '../zustand/useAuthStore'
import type { IAuthUser } from '../types/Interfaces'

export function useAuth() {
  const { user, setUser } = useAuthStore()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const login = async (email: string, password: string) => {
    setLoading(true)
    setError(null)

    try {
      const res = await AuthService.login(email, password)
      if (res?.user) {
        setUser(res.user)
      }

      return { success: true }
    } catch (err: any) {
      setError(err.message || 'Login failed')
      return { success: false }
    } finally {
      setLoading(false)
    }
  }

  const signup = async (data: Partial<IAuthUser>) => {
    setLoading(true)
    setError(null)

    try {
      const res = await AuthService.signup(data)
      if (res) return { success: true }
    } catch (err: any) {
      setError(err.message || 'Signup failed')
      return { success: false }
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    AuthService.logout()
    setUser(null)
    setError(null)
  }

  return {
    user,
    error,
    loading,
    isAuthenticated: Boolean(user),
    login,
    signup,
    logout,
  }
}
