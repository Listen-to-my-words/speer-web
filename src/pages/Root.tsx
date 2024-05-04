import React from 'react'
import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import RootLayout from '../layouts/RootLayout'
import Level from '../components/Level'

const Root = () => {
  return (
    <RootLayout>
      <Grid container rowSpacing={4} columnSpacing={[2, 3]}>
        <Grid xs={12}>
          <Box
            sx={{
              width: '100%',
              height: '30rem',
              backgroundColor: 'lightgray',
              borderRadius: '2rem'
            }}
          />
        </Grid>
        <Grid xs={12}>
          <Typography variant={'h6'}>{'학습 자료실'}</Typography>
        </Grid>
        <Grid xs={6}>
          <Level text={'<1주차> - 성장이의 입학'} />
        </Grid>
        <Grid xs={6}>
          <Level text={'<2주차> - 준비물 구매하기'} />
        </Grid>
        <Grid xs={6}>
          <Level text={'<3주차> - 생일파티 초대'} />
        </Grid>
        <Grid xs={6}>
          <Level text={'<4주차> - 한국음식 요리하기'} />
        </Grid>
      </Grid>
    </RootLayout>
  )
}

export default Root
