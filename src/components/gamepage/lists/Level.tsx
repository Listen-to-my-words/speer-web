import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import React from 'react'

export const SubLevel = ({ subLevelTitle }: { subLevelTitle: string }) => {
  return (
    <Typography variant={'caption'} component={'p'} textAlign={'center'} width={'100%'}>
      {subLevelTitle}
    </Typography>
  )
}

const Level = () => {
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
          <Grid xs={2} sx={{ width: 'fit-content', height: 'fit-content' }}>
            <Box
              sx={{
                width: '1.5rem',
                height: '1.5rem',
                border: '1px solid black'
              }}
            />
          </Grid>
          <Grid xs={5}>
            <Typography variant={'subtitle2'} textAlign={'center'} width={'100%'}>
              {'< 1주차 > - 성장이의 입학'}
            </Typography>
          </Grid>
          <Grid xs={5}>
            <Typography variant={'body2'} textAlign={'center'} width={'100%'}>
              학습 완료
            </Typography>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container justifyContent={'space-between'} alignItems={'flex-start'} width={1}>
          <Grid xs={2} sx={{ width: 'fit-content', height: 'fit-content' }} />
          <Grid xs={5}>
            <SubLevel subLevelTitle={'자기소개하기'} />
            <SubLevel subLevelTitle={'자기소개하기'} />
            <SubLevel subLevelTitle={'자기소개하기'} />
          </Grid>
          <Grid xs={5} />
        </Grid>
      </AccordionDetails>
    </Accordion>
  )
}

export default Level
