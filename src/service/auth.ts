import { app, authService, googleProvider } from './firebase'

class Auth {
  // eslint-disable-next-line
  login() {
    const provider = googleProvider

    return authService.signInWithPopup(provider)
  }
  // eslint-disable-next-line
  logout() {
    app.auth().signOut()
  }

  // eslint-disable-next-line
  onAuthChange = (callback) => {
    app.auth().onAuthStateChanged((user) => {
      callback(user)
    })
  }
}
export default Auth
