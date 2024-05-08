import { Box, Typography } from '@mui/material'
import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import * as style from './Dialog.style'
import { EDialogType, IDialog } from '../../../../types/IDialogs'

const Dialog = ({ currDialog }: { currDialog: IDialog }) => {
  if (currDialog.type === EDialogType.CHANGE_IMAGE) {
    return null
  }
  return (
    <Box sx={style.dialogStyle}>
      <Typography variant={'body2'} sx={style.dialogTextStyle}>
        {currDialog.content}
      </Typography>
      <ArrowDropDownIcon sx={style.arrowStyle} fontSize={'large'} />
    </Box>
  )
}

export default Dialog
