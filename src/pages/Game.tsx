import React from 'react'
import { Stack } from '@mui/material'
import RootLayout from '../layouts/RootLayout'
import DialogBox from '../components/Game/Dialog/DialogBox'
import Subtitle from '../components/Game/Subtitle'
import NavButtons from '../components/Game/NavButtons'

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
