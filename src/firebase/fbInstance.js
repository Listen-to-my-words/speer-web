// eslint-disable-next-line
import { initializeApp, getApp } from 'firebase/app' // eslint-disable-next-line
import 'firebase/auth'

// eslint-disable-next-line
export let app

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.PROCESS_API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
}

try {
  app = getApp('speer')
} catch (e) {
  app = initializeApp(firebaseConfig, 'speer')
}

const firebase = initializeApp(firebaseConfig)

export default firebase
