import { createTheme } from '@mui/material/styles'

// 이후 라이트/다크모드를 생성할 때를 대비하여 ColorTheme을 따로 분리
const colorTheme = createTheme({
  palette: {
    primary: {
      main: '#FFECC9'
    },
    text: {
      primary: '#000000',
      secondary: '#5B5B5B'
    }
  },
  typography: {
    fontSize: 16
  }
})

export default colorTheme
