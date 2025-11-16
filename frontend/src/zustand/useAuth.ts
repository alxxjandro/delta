import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { IUser } from '../types/Interfaces'

interface AuthState {
  user: IUser | null
  setUser: (user: IUser | null) => void
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
    }),
    {
      name: 'auth-storage',
    }
  )
)

export default useAuthStore
