import React from 'react'
import { Box } from '@mui/material'
import * as style from './Dialog.style'

const DialogBackground = () => {
  return <Box sx={style.dialogBoxSizeStyle} component={'img'} src={'https://picsum.photos/200'} />
}

export default DialogBackground
