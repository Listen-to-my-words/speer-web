import { Button, Stack, SxProps } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const navButtonsStyle: SxProps = {
  width: ['5.5rem', '9rem'],
  height: ['2rem', '3rem'],
  wordBreak: 'keep-all',
  fontSize: ['0.75rem', '1rem']
}

const NavButtons = ({ week, level }: { week: number; level: number }) => {
  const navigator = useNavigate()

  const handleNavInitClick = () => navigator(`/game/${week}/1`)

  const handleNavNextClick = (week: number, subLevel: number) => {
    const nextLevel = subLevel === 3 ? 1 : subLevel + 1
    const nextWeek = nextLevel === 1 ? week + 1 : week
    return () => navigator(`/game/${nextWeek}/${nextLevel}`)
  }

  return (
    <Stack direction={'row'} spacing={'1.5rem'} justifyContent={'flex-end'}>
      <Button variant={'contained'} sx={navButtonsStyle} onClick={handleNavInitClick}>
        처음으로
      </Button>
      <Button variant={'contained'} sx={navButtonsStyle} onClick={() => navigator(0)}>
        다시하기
      </Button>
      <Button variant={'contained'} sx={navButtonsStyle} onClick={handleNavNextClick(week, level)}>
        다음 단계
      </Button>
    </Stack>
  )
}

export default NavButtons
