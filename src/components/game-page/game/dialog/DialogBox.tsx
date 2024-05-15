import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import Dialog from './Dialog'
import * as style from './Dialog.style'
import DialogBackground from './DialogBackground'
import { dialogList } from '../../../../const/DialogList'
import { IDialog } from '../../../../types/IDialogs'
import useModal from '../../../../hooks/useModal'

const DialogBox = ({
  week,
  level,
  currLevel,
  setCurrLevel,
  updateProgress,
  images,
  setImages
}: {
  week: number
  level: number
  currLevel: IDialog[]
  setCurrLevel: React.Dispatch<React.SetStateAction<IDialog[]>>
  updateProgress: (level: number, progress: number) => void
  images: [string, string]
  setImages: React.Dispatch<React.SetStateAction<[string, string]>>
}) => {
  const { isOpen, openModal, closeModal, setIsOpen } = useModal()

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
      updateProgress(level, 100)
      return
    }
    setCurrLevel((prev) => {
      const newCurrLevel = prev.slice(1)
      if (newCurrLevel[0].type === 'CHANGE_IMAGE') {
        let nextImage: IDialog | string = newCurrLevel.slice(1).find((dialog) => dialog.type === 'CHANGE_IMAGE')
        nextImage = nextImage ? nextImage.content : ''
        setImages((prev) => [prev[1], nextImage])
        return newCurrLevel.slice(1)
      }
      return newCurrLevel
    })
  }

  const handleSelection = (index: number) => {
    updateProgress(level, currLevel[0].progress || 0)
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
