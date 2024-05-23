import { createTheme } from '@mui/material/styles'
import '../fonts/PretendardVariable.woff2'
import '../fonts/SOYO Maple Bold.ttf'
import '../fonts/SOYO Maple Regular.ttf'
import '../fonts/Galmuri14.woff2'

const galmuri = {
  fontFamily: 'Galmuri14',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Galmuri14') url("/fonts/Galmuri14") format('woff2')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF'
}

const mapleBold = {
  fontFamily: 'SOYO Maple Bold',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 700,
  src: `
    local('SOYO Maple Bold') url("/fonts/SOYO Maple Bold") format('truetype')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF'
}

const pretendardVariable = {
  fontFamily: 'Pretendard Variable',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Pretendard Variable') url("/fonts/PretendardVariable") format('woff2')
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
      secondary: '#5B5B5B',
      disabled: '#BDBDBD'
    }
  },
  typography: {
    fontSize: 16,
    fontFamily: 'var(--main-font), "Pretendard Variable", sans-serif, "SOYO Maple Bold", "Galmuri14"'
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: { fontFace: [galmuri, mapleBold, pretendardVariable] }
    }
  }
})

export default colorTheme
