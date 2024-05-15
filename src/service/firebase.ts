// eslint-disable-next-line
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_PROCESS_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  databaseURL: process.env.REACT_APP_DATABASE_URL
}

// eslint-disable-next-line
export const app: firebase.app.App = firebase.initializeApp(firebaseConfig)
export const authService = firebase.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const database = firebase.database()
export const databaseRef = database.ref()
