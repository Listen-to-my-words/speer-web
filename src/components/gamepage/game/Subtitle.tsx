import React from 'react'
import { Stack, Typography } from '@mui/material'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { levelList } from '../../../const/LevelList'

const Subtitle = ({ week, currLevel }: { week: number; currLevel: number }) => {
  return (
    <Stack justifyContent={'space-between'} alignItems={'center'} direction={'row'}>
      <KeyboardArrowLeftIcon />
      <Stack direction={'row'} spacing={2}>
        <Typography variant={'h4'}>{`${week}주차 - ${levelList[week - 1].title} (${currLevel})`}</Typography>
        <Typography variant={'caption'}>{levelList[week - 1].subLevels[currLevel - 1].title}</Typography>
      </Stack>
      <KeyboardArrowRightIcon />
    </Stack>
  )
}

export default Subtitle
