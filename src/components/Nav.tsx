import React, { useEffect } from 'react'
// import React from 'react'
import { Button, Modal, Paper, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import useProfileStore from '../states/useProfileStore'
import Auth from '../service/auth'
import useModal from '../hooks/useModal'

const Nav = ({ auth }: { auth: Auth }) => {
  const { isOpen, closeModal, openModal } = useModal()
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
    closeModal()
  }

  return (
    <>
      <Stack direction={'row'} justifyContent={'flex-end'} spacing={2}>
        <Button variant={'text'}>
          <Typography variant={'Caption'} color={'text.primary'} onClick={() => navigator('/my-page')}>
            {'마이페이지'}
          </Typography>
        </Button>

        {profile ? (
          <Button variant={'text'} onClick={openModal}>
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
      <Modal open={isOpen} onClose={closeModal}>
        <Paper
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: ['75vw', '25vw'],
            height: 'fit-content',
            // aspectRatio: '1 / 1',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: [2, 4],
            borderRadius: '1rem'
          }}
        >
          <Stack justifyContent={'center'} spacing={2}>
            <Typography variant={'Subtitle1Emphasis'} align={'center'}>
              로그아웃 할까요?
            </Typography>
            <Stack direction={'row'} spacing={2} width={1} justifyContent={'center'}>
              <Button
                onClick={closeModal}
                variant={'contained'}
                sx={{
                  width: '100%',
                  flexGrow: 1
                }}
              >
                <Typography variant={'Caption'} color={'text.primary'}>
                  취소 하기
                </Typography>
              </Button>
              <Button
                onClick={signOut}
                variant={'contained'}
                sx={{
                  width: '100%',
                  flexGrow: 1
                }}
              >
                <Typography variant={'Caption'} color={'text.primary'}>
                  로그아웃 하기
                </Typography>
              </Button>
            </Stack>
          </Stack>
        </Paper>
      </Modal>
    </>
  )
}

export default Nav
