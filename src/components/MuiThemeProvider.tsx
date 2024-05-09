import React from 'react'
import { ThemeProvider } from '@mui/material'
import colorTheme from '../const/ColorTheme'

const MuiThemeProvider = ({ children }: { children: React.ReactNode }) => {
  if (colorTheme.typography) {
    colorTheme.typography.fontFamily = 'var(--main-font), Pretendard Variable, sans-serif'

    colorTheme.typography.h1 = {
      fontSize: '2rem'
    }
    colorTheme.typography.h2 = {
      fontSize: '1.75rem'
    }
    colorTheme.typography.h3 = {
      fontSize: '1.5rem'
    }
    colorTheme.typography.h4 = {
      fontSize: '1rem'
    }
    colorTheme.typography.subtitle1 = {
      fontSize: '1.5rem',
      fontWeight: 500
    }
    colorTheme.typography.body1 = {
      fontSize: '1.5rem',
      fontWeight: 400
    }
  }
  /* 있어야 하는 것
      h1
      h2
      h3
      h4 - 강좌 리스트 레벨 이름
      h5 - 메인에 레벨 타이틀
      subtitle1 - 강좌 리스트 강좌 이름 // weight 500
      body1 - 강좌 리스트 강좌 이름 // weight 400
     */

  return <ThemeProvider theme={colorTheme}>{children}</ThemeProvider>
}

export default MuiThemeProvider
