import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Dialog from './Dialog'
import * as style from './Dialog.style'
import DialogBackground from './DialogBackground'
import { dialogList } from '../../../../const/DialogList'
import { IDialog } from '../../../../types/IDialogs'

const DialogBox = ({ week, level }: { week: number; level: number }) => {
  const [currLevel, setCurrLevel] = useState<IDialog[]>([] as IDialog[])
  const [images, setImages] = useState<[string, string]>(['', ''])

  useEffect(() => {
    setCurrLevel(dialogList[week - 1][level - 1])
    const currImage = dialogList[week - 1][level - 1].find((dialog) => dialog.type === 'CHANGE_IMAGE')
    const nextImage = dialogList[week - 1][level - 1].find(
      (dialog) => dialog.type === 'CHANGE_IMAGE' && dialog.content !== currImage?.content
    )
    setImages(() => [currImage ? currImage.content : '', nextImage ? nextImage.content : ''])
  }, [])

  const handleOnClick = () => {
    if (currLevel.length === 0) {
      return
    }
    setCurrLevel((prev) => prev.slice(1))
    if (currLevel[0].type === 'CHANGE_IMAGE') {
      const nextImage = currLevel.slice(1).find((dialog) => dialog.type === 'CHANGE_IMAGE')
      setImages(() => [currLevel[0]?.content, nextImage ? nextImage.content : ''])
    }
  }

  return (
    <Box
      sx={{
        ...style.dialogBoxStyle,
        position: 'relative',
        boxShadow: '0px 4px 4px 0px #B0B0B040'
      }}
      onClick={handleOnClick}
    >
      <DialogBackground images={images} />
      <Dialog />
    </Box>
  )
}

export default DialogBox
