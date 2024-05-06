import { Button, Stack, SxProps } from '@mui/material'
import React from 'react'

const navButtonsStyle: SxProps = {
  width: ['5.5rem', '9rem'],
  height: ['2rem', '3rem'],
  wordBreak: 'keep-all',
  fontSize: ['0.75rem', '1rem']
}

const NavButtons = () => {
  return (
    <Stack direction={'row'} spacing={'1.5rem'} justifyContent={'flex-end'}>
      <Button variant={'contained'} sx={navButtonsStyle}>
        처음으로
      </Button>
      <Button variant={'contained'} sx={navButtonsStyle}>
        다시하기
      </Button>
      <Button variant={'contained'} sx={navButtonsStyle}>
        다음 단계
      </Button>
    </Stack>
  )
}

export default NavButtons
