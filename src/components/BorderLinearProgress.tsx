import React from 'react'
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress'

const BorderLinearProgress = (props: LinearProgressProps) => {
  return (
    <LinearProgress
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      variant={'determinate'}
      sx={{
        // eslint-disable-next-line
        ...props.sx,
        borderRadius: '0.75rem',
        backgroundColor: 'lightgray',
        '& .MuiLinearProgress-bar': {
          borderRadius: 5,
          backgroundColor: '#FFAE80'
        }
      }}
    />
  )
}

export default BorderLinearProgress
