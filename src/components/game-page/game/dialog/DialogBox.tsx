import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Dialog from './Dialog'
import * as style from './Dialog.style'
import DialogBackground from './DialogBackground'
import { dialogList } from '../../../../const/DialogList'
import { IDialog } from '../../../../types/IDialogs'

const DialogBox = ({ week, level }: { week: number; level: number }) => {
  const [currLevel, setCurrLevel] = useState<IDialog[]>(dialogList[week - 1][level - 1].slice(1))
  const [images, setImages] = useState<[string, string]>(['', ''])

  const setNextImage = () => {
    const nextImage = currLevel.slice(1).find((dialog) => dialog.type === 'CHANGE_IMAGE')
    setImages((prev) => [prev[1], nextImage ? nextImage.content : ''])
  }

  useEffect(() => {
    const currImage = dialogList[week - 1][level - 1][0]
    console.log(dialogList[week - 1][level - 1])
    const nextImage = dialogList[week - 1][level - 1].find(
      (dialog) => dialog.type === 'CHANGE_IMAGE' && dialog.content !== currImage?.content
    )
    setImages(() => [currImage ? currImage.content : '', nextImage ? nextImage.content : ''])
    console.log(currLevel[0])
  }, [])

  const handleOnClick = () => {
    if (currLevel.length === 1) {
      return
    }
    setCurrLevel((prev) => {
      const newCurrLevel = prev.slice(1)
      console.log(newCurrLevel[0])
      if (newCurrLevel[0].type === 'CHANGE_IMAGE') {
        setNextImage()
        return newCurrLevel.slice(1)
      }
      return newCurrLevel
    })
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
      {currLevel.length && <Dialog currDialog={currLevel[0]} />}
    </Box>
  )
}

export default DialogBox
