import React, { useEffect } from 'react'
// import React from 'react'
import { Button, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import useProfileStore from '../states/useProfileStore'
import Auth from '../service/auth'

const Nav = ({ auth }: { auth: Auth }) => {
  const { setProfile, profile } = useProfileStore()

  const navigator = useNavigate()

  useEffect(() => {
    if (!profile) {
      auth.onAuthChange((user) => {
        if (user) {
          setProfile({
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL
          })
        }
      })
    }
  }, [])

  const signIn = async () => {
    if (auth) {
      await auth.setPersistence()
      await auth.onAuthChange((user) => {
        if (user) {
          setProfile({
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL
          })
        } else {
          auth.login().then((data) => {
            setProfile({
              email: data.user.email,
              displayName: data.user.displayName,
              photoURL: data.user.photoURL
            })
          })
        }
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
        <Typography variant={'Caption'} color={'text.primary'} onClick={() => navigator('/my-page')}>
          {'마이페이지'}
        </Typography>
      </Button>

      {profile ? (
        <Button variant={'text'} onClick={signOut}>
          <Typography variant={'Caption'} color={'text.primary'}>
            {'로그아웃'}
          </Typography>
        </Button>
      ) : (
        <Button variant={'text'} onClick={signIn}>
          <Typography variant={'Caption'} color={'text.primary'}>
            {'로그인/회원가입'}
          </Typography>
        </Button>
      )}
    </Stack>
  )
}

export default Nav
