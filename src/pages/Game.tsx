import React from 'react'
import { Stack, Typography } from '@mui/material'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import RootLayout from '../layouts/RootLayout'

const Game = () => {
  return (
    <RootLayout>
      <Stack justifyContent={'space-between'} alignItems={'center'} direction={'row'}>
        <KeyboardArrowLeftIcon />
        <Stack direction={'row'} spacing={2}>
          <Typography variant={'h4'}>{'1주차 - 성장이의 입학 ①'}</Typography>
          <Typography variant={'caption'}>{'자기소개편'}</Typography>
        </Stack>
        <KeyboardArrowRightIcon />
      </Stack>
    </RootLayout>
  )
}

export default Game
