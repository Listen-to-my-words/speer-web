import React from 'react'
// import React from 'react'
import { Button, Stack, Typography } from '@mui/material'
import useAuthState from '../states/useAuthState'
import Auth from '../service/auth'

const Nav = ({ auth }: { auth: Auth }) => {
  const { setProfile, profile } = useAuthState()

  const signIn = () => {
    if (auth) {
      auth.login().then((data) => {
        setProfile({
          email: data.user.email,
          displayName: data.user.displayName,
          photoURL: data.user.photoURL
        })
      })
    }
  }

  const signOut = () => {
    if (auth) {
      auth.logout()
      setProfile(null)
    }
  }

  return (
    <Stack direction={'row'} justifyContent={'flex-end'} spacing={2}>
      <Button variant={'text'}>
        <Typography variant={'caption'}>{'마이페이지'}</Typography>
      </Button>

      {profile ? (
        <Button variant={'text'} onClick={signOut}>
          <Typography variant={'caption'}>{'로그아웃'}</Typography>
        </Button>
      ) : (
        <Button variant={'text'} onClick={signIn}>
          <Typography variant={'caption'}>{'로그인/회원가입'}</Typography>
        </Button>
      )}
    </Stack>
  )
}

export default Nav
