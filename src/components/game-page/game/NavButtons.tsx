import { Button, Stack, SxProps } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { dialogList } from '../../../const/DialogList'
import { IDialog } from '../../../types/IDialogs'

const navButtonsStyle: SxProps = {
  width: ['5.5rem', '9rem'],
  height: ['2rem', '3rem'],
  wordBreak: 'keep-all',
  fontSize: ['0.75rem', '1rem']
}

const NavButtons = ({
  week,
  level,
  setCurrLevel,
  isQuiz
}: {
  week: number
  level: number
  setCurrLevel: React.Dispatch<React.SetStateAction<IDialog[]>>
  isQuiz: boolean
}) => {
  const navigator = useNavigate()

  const handleNavInitClick = () => navigator(`/game/${week}/1`)

  const handleNavResetClick = () => {
    setCurrLevel(dialogList[week - 1][level - 1])
  }

  const handleNavNextClick = (week: number, subLevel: number) => {
    const nextLevel = subLevel === 3 ? 1 : subLevel + 1
    const nextWeek = nextLevel === 1 ? week + 1 : week
    if (isQuiz) {
      return () => navigator(`/game/${week + 1}/1`)
    }
    return () => navigator(`/game/${nextWeek}/${nextLevel}`)
  }

  return (
    <Stack direction={'row'} spacing={'1.5rem'} justifyContent={'flex-end'}>
      <Button variant={'contained'} sx={navButtonsStyle} onClick={handleNavInitClick}>
        처음으로
      </Button>
      <Button variant={'contained'} sx={navButtonsStyle} onClick={handleNavResetClick}>
        다시하기
      </Button>
      <Button variant={'contained'} sx={navButtonsStyle} onClick={handleNavNextClick(week, level)}>
        다음 단계
      </Button>
    </Stack>
  )
}

export default NavButtons
