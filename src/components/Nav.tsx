import { Stack, Typography } from '@mui/material'
import React from 'react'

const Nav = () => {
  return (
    <Stack direction={'row'} justifyContent={'flex-end'} spacing={2}>
      <Typography variant={'caption'}>{'마이페이지'}</Typography>
      <Typography variant={'caption'}>{'로그인/회원가입'}</Typography>
    </Stack>
  )
}

export default Nav
