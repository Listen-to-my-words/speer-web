import { styled } from '@mui/material/styles'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: '1.5rem',
  borderRadius: '0.75rem',
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: 'lightgray'
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: 'background: #FFAE80'
  }
}))

export default BorderLinearProgress
