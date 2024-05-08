/* eslint-disable no-shadow */
import firebase from 'firebase/compat/app'
/* eslint-disable class-methods-use-this */
import { app, authService, googleProvider } from './firebase'

class Auth {
  login() {
    const provider = googleProvider

    return authService.signInWithPopup(provider)
  }

  logout() {
    app.auth().signOut()
  }

  onAuthChange = (callback: (user: any) => any) => {
    app.auth().onAuthStateChanged((user) => {
      callback(user)
    })
  }

  setPersistence = () => {
    return authService.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  }
}

export default Auth
