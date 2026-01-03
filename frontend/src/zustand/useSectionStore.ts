import { create } from 'zustand'
import type { NavbarSection } from '../types/Interfaces'

type Store = {
  activeSection: NavbarSection
  setActiveSection: (section: NavbarSection) => void
}

export const useSectionStore = create<Store>()((set) => ({
  activeSection: 'resumes',
  setActiveSection: (section) => set({ activeSection: section }),
}))
