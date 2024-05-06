import { Box } from '@mui/material'
import React from 'react'
import Dialog from './Dialog'
import * as style from './Dialog.style'
import DialogBackground from './DialogBackground'

const DialogBox = () => {
  return (
    <Box sx={{ ...style.dialogBoxStyle, position: 'relative' }}>
      <DialogBackground />
      <Dialog />
    </Box>
  )
}

export default DialogBox
