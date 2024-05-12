import { createTheme } from '@mui/material/styles'
// import Pretendard from '../fonts/PretendardVariable.woff2'
import '../fonts/PretendardVariable.woff2'

const pretendardVariable = {
  fontFamily: 'Pretendard Variable',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    url("/fonts/PretendardVariable") format('woff2')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF'
}

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
    fontSize: 16,
    fontFamily: 'var(--main-font), "Pretendard Variable", sans-serif'
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: pretendardVariable
    }
  }
})

export default colorTheme
