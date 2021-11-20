import { atom } from 'recoil'

export interface Modal {
  id?: string
  title: string
  completed: boolean
}

export const modalState = atom({
  key: 'modalState',
  default: false,
})
