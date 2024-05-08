import { create } from 'zustand'

interface IProfile {
  email?: string
  locale?: string
  photoURL?: string
  displayName?: string
}

interface IProfileState {
  profile: IProfile | null
  setProfile: (profile: IProfile) => void
}

const useProfileStore = create<IProfileState>((set) => {
  const setProfile = (profile: IProfile) => {
    set((prev) => ({
      ...prev,
      profile
    }))
  }

  return {
    profile: null,
    setProfile
  }
})

export default useProfileStore
