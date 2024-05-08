import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'
import Grid from '@mui/system/Unstable_Grid/Grid'
import { levelList } from '../../const/LevelList'
import { ILevel, ISubLevel } from '../../types/ILevels'
import BorderLinearProgress from '../BorderLinearProgress'

const SubCourseInfo = ({ subLevel }: { subLevel: ISubLevel }) => {
  return (
    <>
      <Grid xs={5} sm={4}>
        <Typography variant={'body1'}>{`${subLevel.title}`}</Typography>
      </Grid>
      <Grid xs={6}>
        <BorderLinearProgress
          value={50}
          sx={{
            width: ['6rem', '100%'],
            maxWidth: '20rem',
            height: ['0.5rem', '1.25rem']
          }}
        />
      </Grid>
      <Grid xs={1} sm={2}>
        <Typography variant={'body2'} sx={{ width: '100%' }} textAlign={'right'}>
          50%
        </Typography>
      </Grid>
    </>
  )
}

const CourseInfo = ({ level }: { level: ILevel }) => {
  return (
    <Stack spacing={[2, 4]} width={1} pt={0.5} pb={3.5} direction={'column'} justifyContent={'space-between'}>
      <Typography variant={'h6'}>{`< ${level.week}주차 > - ${level.title}`}</Typography>
      {/* <Stack spacing={2}> */}
      {level.subLevels.map((subLevel) => (
        <Grid container sx={{ width: '100%' }} justifyContent={'space-between'} alignContent={'center'}>
          <SubCourseInfo subLevel={subLevel} />
        </Grid>
      ))}
      {/* </Stack> */}
    </Stack>
  )
}

const Course = ({ level }: { level: ILevel }) => {
  return (
    <Stack direction={'row'} spacing={[2, 6]} alignContent={'center'}>
      <Avatar
        variant={'square'}
        src={level.image}
        sx={{
          width: ['7.5rem', '17.5rem'],
          height: ['7.5rem', '17.5rem'],
          borderRadius: '0.5rem'
        }}
      />
      <CourseInfo level={level} />
    </Stack>
  )
}

const CourseList = () => {
  return (
    <Stack direction={'column'} spacing={7}>
      <Typography variant={'h5'}>수강 과목</Typography>
      <Stack direction={'column'} spacing={5}>
        {levelList.map((level) => (
          <Course level={level} />
        ))}
      </Stack>
    </Stack>
  )
}

export default CourseList
