import { create } from 'zustand'
import 'firebase/compat/auth'
// eslint-disable-next-line
import firebase from 'firebase/compat/app'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_PROCESS_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
}

// eslint-disable-next-line
let app: firebase.app.App
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  // eslint-disable-next-line
  app = firebase.app()
}

const auth = firebase.auth()

interface IProfile {
  email?: string
  locale?: string
  photoURL?: string
  displayName?: string
}

type TAuthState = {
  token: firebase.auth.AuthCredential | null
  signIn: () => void
  app: firebase.app.App
  auth: firebase.auth.Auth
  firebase: typeof firebase
  refreshProfile: () => void
  profile: IProfile | null
  isLoggedIn: boolean
}

const useAuth = create<TAuthState>((set) => {
  const signIn = async () => {
    const provider = await new firebase.auth.GoogleAuthProvider()

    await firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        const { credential } = result
        set((prev) => ({
          ...prev,
          token: credential
        }))
        const { user } = result
        set((prev) => ({
          ...prev,
          user
        }))
        set((prev) => ({
          ...prev,
          profile: result.additionalUserInfo.profile
        }))
      })
      .catch((error) => {
        console.log(error)
      })
  }

  // 두 가지 일을 하기 때문에 별로인 코드. 리펙토링 요구됨
  const refreshProfile = () => {
    const user = firebase.auth().currentUser
    if (user !== null) {
      set((prev) => ({
        ...prev,
        isLoggedIn: true,
        profile: {
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          locale: prev.profile?.locale
        }
      }))
    } else {
      set((prev) => ({
        ...prev,
        isLoggedIn: false,
        profile: null
      }))
    }
  }

  return {
    token: null,
    app,
    auth,
    signIn,
    firebase,
    profile: null,
    isLoggedIn: false,
    refreshProfile
  }
})

export default useAuth
