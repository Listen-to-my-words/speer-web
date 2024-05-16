import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import Level from '../components/Level'
import { levelList } from '../const/LevelList'

const Root = () => {
  return (
    <Grid container rowSpacing={4} columnSpacing={[2, 3]} justifyContent={'space-evenly'}>
      <Grid xs={12}>
        <Stack
          direction={'row'}
          spacing={2}
          alignItems={'center'}
          justifyContent={'space-between'}
          sx={{
            width: '100%',
            aspectRatio: '9 / 4',
            maxHeight: '20rem',
            backgroundColor: '#FFFCF3',
            borderRadius: '2rem',
            p: ['1rem', '3rem'],
            boxSizing: 'border-box'
          }}
        >
          <Stack spacing={[2, 3]}>
            <Box
              component={'img'}
              src={'/images/main/typo.svg'}
              sx={{
                width: ['50%', '70%'],
                maxWidth: '9rem',
                aspectRatio: '10 / 11'
              }}
            />
            <Box
              component={'img'}
              src={'/images/main/subTypo.svg'}
              sx={{
                width: ['70%', '100%'],
                maxWidth: '11rem'
              }}
            />
          </Stack>
          <Box
            component={'img'}
            src={'/images/main/banner_char.png'}
            sx={{ height: ['100%', '100%'], aspectRatio: '1.1 / 1' }}
          />
        </Stack>
      </Grid>
      <Grid xs={12}>
        <Typography variant={'Title3Emphasis'}>{'학습 자료실'}</Typography>
      </Grid>
      {levelList.map((level) => (
        <Grid xs={6} key={level.week}>
          <Level level={level} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Root
