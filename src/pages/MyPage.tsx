import React from 'react'
import { Divider, Stack, Typography } from '@mui/material'
import Profile from '../components/my-page/Profile'

const MyPage = () => {
  return (
    <Stack>
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
      >
        마이페이지
      </Typography>
      <Profile />
    </Stack>
  )
}

export default MyPage
