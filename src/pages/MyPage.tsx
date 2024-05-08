import React from 'react'
import { Box, Divider, Stack, Typography } from '@mui/material'
import Profile from '../components/my-page/Profile'
import CourseList from '../components/my-page/CourseList'

const MyPage = () => {
  return (
    <Stack spacing={8}>
      <Box>
        <Divider
          sx={{
            borderTop: '2px solid lightgray'
          }}
        />
        <Typography
          variant={'h4'}
          sx={{
            py: '2rem'
          }}
          align={'center'}
        >
          마이페이지
        </Typography>
        <Profile />
      </Box>
      <CourseList />
    </Stack>
  )
}

export default MyPage
