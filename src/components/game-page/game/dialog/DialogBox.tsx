import { Box } from '@mui/material'
import React from 'react'
import Dialog from './Dialog'
import * as style from './Dialog.style'
import DialogBackground from './DialogBackground'
import { IDialog } from '../../../../types/IDialogs'
import useModal from '../../../../hooks/useModal'
import { useToastStore } from '../../../../states/useToastStore'

const DialogBox = ({
  level,
  currLevel,
  setCurrLevel,
  updateProgress,
  images,
  setImages
}: {
  level: number
  currLevel: IDialog[]
  setCurrLevel: React.Dispatch<React.SetStateAction<IDialog[]>>
  updateProgress: (level: number, progress: number) => void
  images: [string, string]
  setImages: React.Dispatch<React.SetStateAction<[string, string]>>
}) => {
  const { isOpen, openModal, closeModal, setIsOpen } = useModal()
  const { openToast } = useToastStore()

  const handleOnClick = () => {
    if (currLevel[0].type === 'SELECTION') {
      openModal()
      return
    }
    if (currLevel[0].next) {
      setCurrLevel((prev) => {
        return prev[0].next[0]
      })
      return
    }
    if (currLevel.length === 1) {
      updateProgress(level, 100)
      openToast('다 학습했어요. 다음 단계로 버튼을 눌러주세요.', 'info')
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
      return [...prev[0]?.next[index], ...prev.slice(1)] || ([] as IDialog[])
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
