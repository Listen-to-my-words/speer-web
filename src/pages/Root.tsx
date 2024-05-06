import React from 'react'
import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import RootLayout from '../layouts/RootLayout'
import Level from '../components/Level'
import { levelList } from '../const/LevelList'

const Root = () => {
  return (
    <RootLayout>
      <Grid container rowSpacing={4} columnSpacing={[2, 3]} justifyContent={'space-evenly'}>
        <Grid xs={12}>
          <Box
            sx={{
              width: '100%',
              height: 'calc((100vw - 3rem) /3 * 2)',
              maxHeight: '20rem',
              backgroundColor: 'lightgray',
              borderRadius: '2rem'
            }}
          />
        </Grid>
        <Grid xs={12}>
          <Typography variant={'h6'}>{'학습 자료실'}</Typography>
        </Grid>
        {levelList.map((level) => (
          <Grid xs={6} key={level.week}>
            <Level level={level} />
          </Grid>
        ))}
      </Grid>
    </RootLayout>
  )
}

export default Root
