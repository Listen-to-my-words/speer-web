import React from 'react'
import { Box, Stack, Typography, Button, Paper } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { useNavigate } from 'react-router-dom'
import { ILevel } from '../types/ILevels'
import useModal from '../hooks/useModal'

const Level = ({ level }: { level: ILevel }) => {
  const { Modal, isOpen, openModal, closeModal } = useModal()
  const navigator = useNavigate()

  const handleLevelClick = (week: number, subLevel: number) => {
    return () => navigator(`/game/${week}/${subLevel}`)
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
            borderRadius: '0.5rem'
          }}
          component={'img'}
          src={level.image}
        />
        <Typography
          variant={'subtitle1'}
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
          <Grid container width={1}>
            {level.subLevels.map((subLevel) => (
              <Grid
                xs={6}
                key={subLevel.level}
                sx={{
                  height: 'calc((100vw - 3rem) / 2)',
                  maxHeight: '15rem',
                  padding: '0.5rem'
                }}
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
                  <Typography variant={'subtitle2'} align={'center'} width={1}>{`${subLevel.title}`}</Typography>
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
