import { create } from 'zustand'

export interface IToastProps {
  open: boolean
  handleClose: () => void
  message: string
  severity?: 'success' | 'error' | 'info'
}

export interface IToastStore {
  toast: IToastProps
  openToast: (message: string, severity?: 'success' | 'error' | 'info') => void
  closeToast: () => void
}

export const useToastStore = create<IToastStore>((set) => ({
  toast: {
    open: false,
    handleClose: () => {},
    message: ''
  },
  openToast: (message, severity) => {
    set((state) => ({
      toast: {
        ...state.toast,
        open: true,
        message,
        severity
      }
    }))
  },
  closeToast: () =>
    set((state) => ({
      toast: {
        ...state.toast,
        open: false
      }
    }))
}))
