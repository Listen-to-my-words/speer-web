import React from 'react'
import { Box, Stack, Typography, Button, Paper } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ILevel } from '../types/ILevels'
import useModal from '../hooks/useModal'

const Level = ({ level }: { level: ILevel }) => {
  const { Modal, isOpen, openModal, closeModal } = useModal()
  const navigator = useNavigate()

  const handleLevelClick = (week: number, subLevel: number) => {
    return () => navigator(`/game/${week}/${subLevel}`)
  }

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

  return (
    <>
      <Button
        component={Stack}
        spacing={2}
        sx={{
          justifyContent: 'flex-start',
          width: '100%',
          alignItems: 'flex-start',
          p: 0,
          color: 'black'
        }}
        onClick={openModal}
        disabled={level.week !== 1}
      >
        <Box
          sx={{
            width: '100%',
            height: 'calc((100vw - 3rem) / 2)',
            maxHeight: '20rem',
            backgroundColor: 'lightgray',
            borderRadius: '0.5rem',
            objectFit: 'cover'
          }}
          component={'img'}
          src={level.image}
        />
        <Typography
          variant={'Subtitle1Emphasis'}
          sx={{
            marginLeft: '0.25rem !important'
          }}
        >
          {`<${level.week}주차> ${level.title}`}
        </Typography>
      </Button>
      <Modal open={isOpen} onClose={closeModal} sx={{}}>
        <Paper
          sx={{
            width: 'calc((100vw - 3rem))',
            height: 'calc((100vw - 3rem))',
            maxWidth: '30rem',
            maxHeight: '30rem',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
          elevation={0}
        >
          <Grid container width={1} component={motion.div} variants={container} initial={'hidden'} animate={'visible'}>
            {level.subLevels.map((subLevel) => (
              <Grid
                xs={6}
                key={subLevel.level}
                sx={{
                  height: 'calc((100vw - 3rem) / 2)',
                  maxHeight: '15rem',
                  padding: '0.5rem'
                }}
                component={motion.div}
                variants={item}
              >
                <Button
                  sx={{
                    backgroundColor: 'lightgray',
                    borderRadius: '0.5rem',
                    width: '100%',
                    height: '100%',
                    p: 0
                  }}
                  onClick={handleLevelClick(level.week, subLevel.level)}
                >
                  <Typography
                    variant={'Subtitle2'}
                    align={'center'}
                    width={1}
                    color={'text.primary'}
                  >{`${subLevel.title}`}</Typography>
                </Button>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Modal>
    </>
  )
}

export default Level
