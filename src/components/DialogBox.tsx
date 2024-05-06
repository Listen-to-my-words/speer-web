import { Box } from '@mui/material'
import React from 'react'
import Dialog from './Dialog'
import * as style from './Dialog.style'

const DialogBox = () => {
  return (
    <Box sx={{ ...style.dialogBoxStyle, position: 'relative' }}>
      <Dialog />
    </Box>
  )
}

export default DialogBox
