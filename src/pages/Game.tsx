import React from 'react'
import { Stack, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import DialogBox from '../components/gamepage/game/dialog/DialogBox'
import Subtitle from '../components/gamepage/game/Subtitle'
import NavButtons from '../components/gamepage/game/NavButtons'
import Level from '../components/gamepage/lists/Level'
import { levelList } from '../const/LevelList'

const Game = () => {
  const { week, level: currLevel } = useParams()

  return (
    <Stack spacing={4}>
      <Subtitle week={Number(week)} currLevel={Number(currLevel)} />
      <DialogBox week={Number(week)} level={Number(currLevel)} />
      <NavButtons />
      <Typography variant={'h6'}>목록</Typography>
      <Stack spacing={4}>
        {levelList.map((level) => (
          <Level key={level.title} level={level} />
        ))}
      </Stack>
    </Stack>
  )
}

export default Game
