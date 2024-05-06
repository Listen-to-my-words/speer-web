import React from 'react'
import { Stack, Typography } from '@mui/material'
import RootLayout from '../layouts/RootLayout'
import DialogBox from '../components/gamepage/game/dialog/DialogBox'
import Subtitle from '../components/gamepage/game/Subtitle'
import NavButtons from '../components/gamepage/game/NavButtons'
import Level from '../components/gamepage/lists/Level'

const Game = () => {
  return (
    <RootLayout>
      <Stack spacing={4}>
        <Subtitle />
        <DialogBox />
        <NavButtons />
        <Typography variant={'h6'}>목록</Typography>
        <Stack spacing={4}>
          <Level />
          <Level />
          <Level />
          <Level />
        </Stack>
      </Stack>
    </RootLayout>
  )
}

export default Game
