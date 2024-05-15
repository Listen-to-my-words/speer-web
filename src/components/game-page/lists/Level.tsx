import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import React from 'react'
import { ILevel } from '../../../types/ILevels'

export const SubLevel = ({ subLevelTitle }: { subLevelTitle: string }) => {
  return (
    <Typography variant={'Caption'} textAlign={'center'} width={'100%'} sx={{ display: 'inline-block' }}>
      {subLevelTitle}
    </Typography>
  )
}

const Level = ({ level, progress }: { level: ILevel; progress: [number, number, number] }) => {
  const isFinished = progress[0] === 100 && progress[1] === 100 && progress[2] === 100
  return (
    <Accordion
      sx={{
        boxShadow: 'none !important',
        borderRadius: '0.5rem',
        '&:before': {
          display: 'none'
        },
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.04)'
        }
      }}
    >
      <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
        <Grid container justifyContent={'space-between'} alignItems={'center'} width={1}>
          <Grid xs={8}>
            <Typography variant={'Subtitle1Emphasis'} color={'#303030'} textAlign={'center'} width={'100%'}>
              {`<${level.week}주차> ${level.title}`}
            </Typography>
          </Grid>
          <Grid xs={4}>
            <Typography variant={'Body2'} textAlign={'center'} width={'100%'}>
              {isFinished ? '학습 완료' : '학습 중'}
            </Typography>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container justifyContent={'space-between'} alignItems={'flex-start'} width={1}>
          <Grid xs={8}>
            {level.subLevels.map((subLevel) => (
              <SubLevel key={subLevel.title} subLevelTitle={subLevel.title} />
            ))}
          </Grid>
          <Grid xs={4} />
        </Grid>
      </AccordionDetails>
    </Accordion>
  )
}

export default Level
