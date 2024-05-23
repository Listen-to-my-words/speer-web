import React from 'react'
import { Box } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import * as style from './Dialog.style'

const DialogBackground = ({ images }: { images: [string, string] }) => {
  return (
    <AnimatePresence>
      {images.map((image, index) => {
        if (!image) return null
        return (
          <motion.div key={image} initial={{ opacity: 0 }} animate={{ opacity: !index ? 1 : 0 }} exit={{ opacity: 0 }}>
            <Box
              sx={{
                ...style.dialogBoxSizeStyle,
                objectFit: 'cover',
                zIndex: 50 - index,
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: '100%',
                height: '100%'
              }}
              component={'img'}
              src={image}
            />
          </motion.div>
        )
      })}
    </AnimatePresence>
  )
}

export default DialogBackground
