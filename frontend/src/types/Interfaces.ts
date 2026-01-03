import type { IconType } from 'react-icons'

/**
 * Data related interfaces
 */
export interface IUser {
  id: string
  name: string
  username: string
  email: string
}

export interface IAuthUser extends IUser {
  password: string
}

/**
 * Type for items layouts
 */
export type viewType = 'GRID' | 'LIST'

/**
 * Navbar related interfaces
 */
export type NavbarSection = 'resumes' | 'cover-letters' | 'applications'

export interface NavbarButton {
  id: NavbarSection
  icon: IconType
  label: string
}
