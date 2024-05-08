import { create } from 'zustand'

interface IProfile {
  email?: string
  locale?: string
  photoURL?: string
  displayName?: string
}

interface IAuthState {
  profile: IProfile | null
  setProfile: (profile: IProfile) => void
}

const useAuthState = create<IAuthState>((set) => ({
  profile: null,
  setProfile: (profile: IProfile) => {
    set((prev) => ({
      ...prev,
      profile
    }))
  }
}))

export default useAuthState
