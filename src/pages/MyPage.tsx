import React, { useEffect } from 'react'
import { Backdrop, Box, CircularProgress, Divider, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Profile from '../components/my-page/Profile'
import CourseList from '../components/my-page/CourseList'
import Database from '../service/database'
import Auth from '../service/auth'
import useProfileStore from '../states/useProfileStore'

const MyPage = ({ database, auth }: { database: Database; auth: Auth }) => {
  const { profile, setProfile } = useProfileStore()
  const navigate = useNavigate()

  useEffect(() => {
    if (!profile) {
      auth.onAuthChange((user) => {
        if (user) {
          setProfile({
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL
          })
        } else {
          navigate('/')
        }
      })
    }
  }, [])

  if (!profile) {
    return (
      <Backdrop open>
        <CircularProgress />
      </Backdrop>
    )
  }

  return (
    <Stack spacing={8}>
      <Box>
        <Divider
          sx={{
            borderTop: '2px solid lightgray'
          }}
        />
        <Typography
          variant={'Title2Emphasis'}
          sx={{
            py: '2rem'
          }}
          align={'center'}
        >
          마이페이지
        </Typography>
        <Profile />
      </Box>
      <CourseList database={database} displayName={profile.displayName} />
    </Stack>
  )
}

export default MyPage
