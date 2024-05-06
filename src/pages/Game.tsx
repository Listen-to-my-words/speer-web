import React from 'react'
import { Stack } from '@mui/material'
import RootLayout from '../layouts/RootLayout'
import DialogBox from '../components/gamepage/game/dialog/DialogBox'
import Subtitle from '../components/gamepage/game/Subtitle'
import NavButtons from '../components/gamepage/game/NavButtons'

const Game = () => {
  return (
    <RootLayout>
      <Stack spacing={2}>
        <Subtitle />
        <DialogBox />
        <NavButtons />
      </Stack>
    </RootLayout>
  )
}

export default Game
