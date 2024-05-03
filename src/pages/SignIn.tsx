import { Button, Stack } from '@mui/material'
import React from 'react'
import useAuth from '../states/useAuth.ts'

const SignIn = () => {
  const { signIn, profile } = useAuth()

  const readProfile = () => {
    console.log(profile)
  }

  return (
    <Stack>
      <h1>sign in page</h1>
      <Button onClick={signIn}>Sign in with Google</Button>
      <Button onClick={readProfile}>read profile</Button>
    </Stack>
  )
}

export default SignIn
