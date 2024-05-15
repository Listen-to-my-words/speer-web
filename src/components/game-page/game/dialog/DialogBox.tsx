import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Dialog from './Dialog'
import * as style from './Dialog.style'
import DialogBackground from './DialogBackground'
import { dialogList } from '../../../../const/DialogList'
import { IDialog } from '../../../../types/IDialogs'
import useModal from '../../../../hooks/useModal'

const DialogBox = ({ week, level }: { week: number; level: number }) => {
  const [currLevel, setCurrLevel] = useState<IDialog[]>(dialogList[week - 1][level - 1].slice(1))
  const [images, setImages] = useState<[string, string]>(['', ''])
  const { isOpen, openModal, closeModal, setIsOpen } = useModal()

  // const setNextImage = () => {
  //   const nextImage = currLevel.slice(1).find((dialog) => dialog.type === 'CHANGE_IMAGE')
  //   setImages((prev) => [prev[1], nextImage ? nextImage.content : ''])
  // }

  useEffect(() => {
    const currImage = dialogList[week - 1][level - 1][0]
    const nextImage = dialogList[week - 1][level - 1].find(
      (dialog) => dialog.type === 'CHANGE_IMAGE' && dialog.content !== currImage?.content
    )
    setImages(() => [currImage ? currImage.content : '', nextImage ? nextImage.content : ''])
  }, [])

  const handleOnClick = () => {
    if (currLevel[0].type === 'SELECTION') {
      openModal()
      return
    }
    if (currLevel.length === 1) {
      return
    }
    setCurrLevel((prev) => {
      const newCurrLevel = prev.slice(1)
      if (newCurrLevel[0].type === 'CHANGE_IMAGE') {
        const nextImage = newCurrLevel.slice(1).find((dialog) => dialog.type === 'CHANGE_IMAGE')
        setImages((prev) => [prev[1], nextImage ? nextImage.content : ''])
        return newCurrLevel.slice(1)
      }
      return newCurrLevel
    })
  }

  const handleSelection = (index: number) => {
    setCurrLevel((prev) => {
      closeModal()
      return prev[0]?.next[index] || ([] as IDialog[])
    })
    setIsOpen(false)
  }

  return (
    <Box
      sx={{
        ...style.dialogBoxStyle
      }}
      onClick={handleOnClick}
    >
      <DialogBackground images={images} />
      {currLevel.length && <Dialog currDialog={currLevel[0]} isOpen={isOpen} handleSelection={handleSelection} />}
    </Box>
  )
}

export default DialogBox
