import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { motion } from 'framer-motion'
import * as style from './Dialog.style'
import { EDialogType, IDialog } from '../../../../types/IDialogs'

const Dialog = ({
  currDialog,
  isOpen,
  handleSelection
}: {
  currDialog: IDialog
  isOpen: boolean
  handleSelection: (index: number) => void
}) => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }
  if (currDialog.type === EDialogType.CHANGE_IMAGE) {
    return null
  }

  let name = ''
  if (currDialog.name) {
    name = currDialog.name
  } else if (currDialog.type === EDialogType.SEONG_JANG) {
    name = '성장이'
  } else if (currDialog.type === EDialogType.YOUNG_WON) {
    name = '영원이'
  }

  return (
    <>
      <Box sx={style.dialogStyle}>
        <Typography
          variant={'Body2'}
          color={'#fff'}
          fontWeight={500}
          sx={{
            display: name ? 'block' : 'none',
            position: 'absolute',
            top: '0.5rem',
            left: '1rem',
            zIndex: 300,
            backgroundColor: '#FFB762',
            borderRadius: '0.5rem',
            padding: '0.2rem 0.5rem',
            transform: 'translateY(-75%)'
          }}
        >
          {name}
        </Typography>
        <Typography variant={'Body2'} sx={style.dialogTextStyle} fontFamily={'Galmuri14'}>
          {currDialog.content}
        </Typography>
        <ArrowDropDownIcon sx={style.arrowStyle} fontSize={'large'} />
      </Box>
      {isOpen && (
        <Box
          sx={{
            zIndex: 200,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            position: 'absolute',
            top: 0,
            left: 0
          }}
        >
          <Stack
            direction={'column'}
            component={motion.div}
            variants={container}
            initial={'hidden'}
            animate={'visible'}
            justifyContent={'center'}
            alignItems={'center'}
            spacing={2}
            sx={{
              width: '100%',
              height: '100%',
              py: '1rem',
              zIndex: 400
            }}
          >
            {currDialog.selection?.map((selection, index) => {
              return (
                <Box
                  component={motion.div}
                  variants={item}
                  width={'50%'}
                  key={selection}
                  sx={{
                    backgroundColor: 'lightgray',
                    borderRadius: '0.5rem'
                  }}
                >
                  <Button
                    variant={'text'}
                    onClick={(e) => {
                      e.stopPropagation()
                      handleSelection(index)
                    }}
                    sx={{
                      width: '100%',
                      height: '3rem',
                      backgroundColor: '#fff'
                    }}
                  >
                    <Typography variant={'Body2'} color={'text.primary'} fontFamily={'Galmuri14'}>
                      {selection}
                    </Typography>
                  </Button>
                </Box>
              )
            })}
          </Stack>
        </Box>
      )}
    </>
  )
}

export default Dialog
