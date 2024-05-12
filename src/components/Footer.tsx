import { Stack, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Stack
      direction={'row'}
      justifyContent={'center'}
      alignItems={'center'}
      sx={{
        bgcolor: 'primary.main',
        height: ['2rem', '8rem'],
        width: '100vw',
        left: 0,
        // mt: '10rem',
        position: 'relative'
        // transform: 'translateY(-100%)'
      }}
    >
      <Typography variant={'subtitle2'} sx={{ color: '#ffffff' }}>
        {'서울여자대학교 바롬 2팀 내 말을 들어조'}
      </Typography>
    </Stack>
  )
}

export default Footer
