import React, { useEffect } from 'react'
import { Stack, Typography, IconButton } from '@mui/material'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { useNavigate } from 'react-router-dom'
import { levelList } from '../../../const/LevelList'

const Subtitle = ({ week, currLevel }: { week: number; currLevel: number }) => {
  const navigator = useNavigate()
  useEffect(() => {
    if (week !== 1) navigator(`/`)
  }, [week, navigator])

  // eslint-disable-next-line
  const handleNavBeforeClick = (week: number, subLevel: number) => {
    const beforeLevel = subLevel === 1 ? 3 : subLevel - 1
    const beforeWeek = beforeLevel === 3 ? week - 1 : week
    return () => navigator(`/game/${beforeWeek}/${beforeLevel}`)
  }

  // eslint-disable-next-line
  const handleNavNextClick = (week: number, subLevel: number) => {
    const nextLevel = subLevel === 3 ? 1 : subLevel + 1
    const nextWeek = nextLevel === 1 ? week + 1 : week
    return () => navigator(`/game/${nextWeek}/${nextLevel}`)
  }

  return (
    <Stack justifyContent={'space-between'} alignItems={'center'} direction={'row'}>
      <IconButton onClick={handleNavBeforeClick(week, currLevel)} disabled={week === 1 && currLevel === 1}>
        <KeyboardArrowLeftIcon />
      </IconButton>
      <Stack direction={'row'} spacing={2}>
        <Typography variant={'h4'}>{`${week}주차 - ${levelList[week - 1].title} (${currLevel})`}</Typography>
        <Typography variant={'caption'}>{levelList[week - 1].subLevels[currLevel - 1].title}</Typography>
      </Stack>
      <IconButton onClick={handleNavNextClick(week, currLevel)} disabled={week === 4 && currLevel === 3}>
        <KeyboardArrowRightIcon />
      </IconButton>
    </Stack>
  )
}

export default Subtitle
