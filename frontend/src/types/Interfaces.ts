import type { MantineColor } from '@mantine/core'
import type { IconType } from 'react-icons'

/**
 * Data related interfaces
 */
export interface IUser {
  id: string
  firstName: string
  lastName: string
  username: string
  email: string
}

export interface IAuthUser extends IUser {
  password: string
}

/**
 * Cover letter related interfaces
 */
export interface ICoverLetter {
  title: string
  company: string
  position: string
  keypoints: string
  jobDescription: string
  tone: ToneType
}

export interface ICoverLetterResponse extends ICoverLetter {
  id: string
  content: string
  createdAt: string | Date
}

export type ToneType = 'Professional' | 'Friendly' | 'Enthusiastic' | 'Confident'

export const toneColorMap: Record<ToneType, MantineColor> = {
  Professional: 'red',
  Friendly: 'blue',
  Enthusiastic: 'yellow',
  Confident: 'green',
}

/**
 * Type for items layouts
 */
export type viewType = 'GRID' | 'LIST'

/**
 * Navbar related interfaces
 */
export type NavbarSection = 'resumes' | 'cover-letters' | 'applications'
export type CreateType = 'resume' | 'cover-letter'

export interface NavbarButton {
  id: NavbarSection
  icon: IconType
  label: string
}
