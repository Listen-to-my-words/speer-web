import { Box, Typography } from '@mui/material'
import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import * as style from './Dialog.style'

const Dialog = () => {
  return (
    <Box sx={style.dialogStyle}>
      <Typography variant={'body2'} sx={style.dialogTextStyle}>
        {'대통령은 국무총리·국무위원·행정각부의 장 기타 법률이 정하는 공사의 직을 겸할 수 없다.'}
      </Typography>
      <ArrowDropDownIcon sx={style.arrowStyle} fontSize={'large'} />
    </Box>
  )
}

export default Dialog
