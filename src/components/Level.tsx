import React from 'react'
import { Box, Stack, Typography, Button, Menu, MenuItem, Paper } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { useNavigate } from 'react-router-dom'
import { ILevel } from '../types/ILevels'

const Level = ({ level }: { level: ILevel }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const navigater = useNavigate()

  const handleLevelClick = (week: number, subLevel: number) => {
    return () => navigater(`/game/${week}/${subLevel}`)
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
        aria-controls={open ? `week${level.week}-levels` : undefined}
        aria-haspopup={'true'}
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        id={`week${level.week}-levels-button`}
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
      <Menu
        id={`week${level.week}-levels`}
        aria-labelledby={`week${level.week}-levels-button`}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
      >
        <Paper
          sx={{
            width: 'calc((100vw - 3rem) / 4)',
            height: 'calc((100vw - 3rem) / 4)'
          }}
          elevation={0}
        >
          <Grid container width={1}>
            {level.subLevels.map((subLevel) => (
              <Grid
                xs={6}
                key={subLevel.level}
                sx={{
                  height: 'calc((100vw - 3rem) / 8)',
                  padding: '0.5rem'
                }}
                onClick={handleLevelClick(level.week, subLevel.level)}
              >
                <MenuItem
                  sx={{
                    backgroundColor: 'lightgray',
                    borderRadius: '0.5rem',
                    width: '100%',
                    height: '100%',
                    p: 0
                  }}
                >
                  <Typography variant={'subtitle2'} align={'center'} width={1}>{`${subLevel.title}`}</Typography>
                </MenuItem>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Menu>
    </>
  )
}

export default Level
