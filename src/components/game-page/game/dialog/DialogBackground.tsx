import React, { useState } from 'react'
import { Box } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import * as style from './Dialog.style'

const DialogBackground = ({ images, bgColor }: { images: [string, string]; bgColor?: string }) => {
  const [hasError, setHasError] = useState(false)
  if (hasError || images[0] === '') return <Box sx={{ ...style.dialogBackgroundStyle, backgroundColor: bgColor }} />
  return (
    <AnimatePresence>
      {images.map((image, index) => {
        if (!image) return null
        return (
          <motion.div key={image} initial={{ opacity: 0 }} animate={{ opacity: !index ? 1 : 0 }} exit={{ opacity: 0 }}>
            <Box
              sx={{
                ...style.dialogBackgroundStyle,
                zIndex: 50 - index
              }}
              component={'img'}
              src={image}
              alt={'dialog-background'}
              onError={() => setHasError(true)}
            />
          </motion.div>
        )
      })}
    </AnimatePresence>
  )
}

export default DialogBackground
