import React, { useEffect, useState } from 'react'
import { Backdrop, Box, CircularProgress, Divider, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Profile from '../components/my-page/Profile'
import CourseList from '../components/my-page/CourseList'
import Database from '../service/database'
import Auth from '../service/auth'
import useProfileStore from '../states/useProfileStore'
import { useToastStore } from '../states/useToastStore'
import { IProgress } from '../types/IProgress'

const MyPage = ({ database, auth }: { database: Database; auth: Auth }) => {
  const { profile, setProfile } = useProfileStore()
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState<IProgress | null>(null)

  const { openToast } = useToastStore()

  if (!progress) return null

  useEffect(() => {
    const fetchData = async (displayName: string) => {
      await database.getProgress(displayName).then((data) => setProgress(data))
      setIsLoading(false)
    }
    if (!profile) {
      auth.onAuthChange((user) => {
        if (user) {
          setProfile({
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL
          })
          setIsLoading(true)
          if (!isLoading) fetchData(user.displayName)
        } else {
          openToast('로그인이 필요해요.', 'error')
          navigate('/')
        }
      })
    } else {
      setIsLoading(true)
      if (!isLoading) fetchData(profile.displayName)
    }
  }, [])

  if (!profile || isLoading) {
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
      <CourseList progress={progress} />
    </Stack>
  )
}

export default MyPage
