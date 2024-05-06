import { Box, Typography } from '@mui/material'
import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import * as style from './Dialog.style'

const Dialog = () => {
  return (
    <Box sx={style.dialogStyle}>
      <Typography variant={'body2'} sx={style.dialogTextStyle}>
        {
          '대통령은 국무총리·국무위원·행정각부의 장 기타 법률이 정하는 공사의 직을 겸할 수 없다. 정당은 그 목적·조직과 활동이 민주적이어야 하며, 국민의 정치적 의사형성에 참여하는데 필요한 조직을 가져야 한다.'
        }
      </Typography>
      <ArrowDropDownIcon sx={style.arrowStyle} fontSize={'large'} />
    </Box>
  )
}

export default Dialog
