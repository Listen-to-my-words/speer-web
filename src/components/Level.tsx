import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const Level = ({ text }: { text?: string }) => {
  return (
    <Stack spacing={2}>
      <Box
        sx={{
          width: '100%',
          height: 'calc((100vw - 3rem) / 2)',
          maxHeight: '20rem',
          backgroundColor: 'lightgray',
          borderRadius: '0.5rem'
        }}
      >
        {text}
      </Box>
      <Typography
        variant={'caption'}
        sx={{
          fontSize: '16px'
        }}
      >
        {text}
      </Typography>
    </Stack>
  )
}

export default Level
