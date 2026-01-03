import { create } from 'zustand'
import type { viewType } from '../types/Interfaces'

type Store = {
  viewMode: viewType
  setView: (view: viewType) => void
}

export const useViewModeStore = create<Store>()((set) => ({
  viewMode: 'GRID',
  setView: (view) => set(() => ({ viewMode: view })),
}))
