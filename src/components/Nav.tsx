import React, { useEffect } from 'react'
import { Button, Stack, Typography } from '@mui/material'
import useAuth from '../states/useAuth'

const Nav = () => {
  const { profile, isLoggedIn, signIn, refreshProfile } = useAuth()
  const flag: boolean = false

  useEffect(() => {
    refreshProfile()
  }, [isLoggedIn])

  return (
    <Stack direction={'row'} justifyContent={'flex-end'} spacing={2}>
      <Button variant={'text'}>
        <Typography variant={'caption'}>{'마이페이지'}</Typography>
      </Button>
      {flag ? (
        <Typography variant={'caption'}>{`${profile.displayName}/(${profile.email})`}</Typography>
      ) : (
        <Button variant={'text'} onClick={signIn}>
          <Typography variant={'caption'}>{'로그인/회원가입'}</Typography>
        </Button>
      )}
    </Stack>
  )
}

export default Nav
