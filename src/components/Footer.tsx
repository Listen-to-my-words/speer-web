import { Stack, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Stack
      direction={'row'}
      justifyContent={'center'}
      alignItems={'center'}
      sx={{
        bgcolor: 'lightgray',
        height: ['2rem', '8rem'],
        width: '100vw',
        justifySelf: 'flex-end',
        left: 0,
        mt: '10rem'
      }}
    >
      <Typography variant={'subtitle2'}>{'서울여자대학교 바롬 2팀 알아서 잘하조'}</Typography>
    </Stack>
  )
}

export default Footer
