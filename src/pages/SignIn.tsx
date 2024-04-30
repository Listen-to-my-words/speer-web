import { Button, Stack } from '@mui/material'
import React from 'react'
// eslint-disable-next-line
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

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
let app
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  // eslint-disable-next-line
  app = firebase.app()
}

const SignIn = () => {
  const logGoogleUser = async () => {
    const provider = await new firebase.auth.GoogleAuthProvider()

    const res = await firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        // const { credential } = result
        return result
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const token = credential.accessToken
        // // The signed-in user info.
        // const { user } = result
        // // IdP data available in result.additionalUserInfo.profile.
        // // ...
      })
      .catch((error) => {
        // // Handle Errors here.
        // const errorCode = error.code
        // const errorMessage = error.message
        // // The email of the user's account used.
        // const { email } = error
        // // The firebase.auth.AuthCredential type that was used.
        // const { credential } = error
        // ...
        console.log(error)
      })
    await console.log(res)
  }
  return (
    <Stack>
      <h1>sign in page</h1>
      <Button onClick={logGoogleUser}>Sign in with Google</Button>
    </Stack>
  )
}

export default SignIn
