import { Box } from '@mui/material'
import React from 'react'
import Dialog from './Dialog'
import * as style from './Dialog.style'
import DialogBackground from './DialogBackground'

const DialogBox = () => {
  return (
    <Box
      sx={{
        ...style.dialogBoxStyle,
        position: 'relative',
        boxShadow: '0px 4px 4px 0px #B0B0B040'
      }}
    >
      <DialogBackground />
      <Dialog />
    </Box>
  )
}

export default DialogBox
