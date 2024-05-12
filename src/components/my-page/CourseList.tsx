import { Avatar, Divider, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import Grid from '@mui/system/Unstable_Grid/Grid'
import { levelList } from '../../const/LevelList'
import { ILevel, ISubLevel } from '../../types/ILevels'
import BorderLinearProgress from '../BorderLinearProgress'

const SubCourseInfo = ({ subLevel }: { subLevel: ISubLevel }) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))
  return (
    <>
      <Grid xs={6} sm={4}>
        <Typography variant={'Subtitle2'}>{`${subLevel.title}`}</Typography>
      </Grid>
      <Grid container xs={6} sm={8}>
        <Grid xs={10} sm={8}>
          {matches ? (
            <BorderLinearProgress
              value={50}
              sx={{
                width: '100%',
                maxWidth: '20rem',
                minWidth: '6rem',
                height: ['0.5rem', '1.25rem'],
                display: 'inline-block'
              }}
            />
          ) : (
            <Stack justifyContent={'center'} alignItems={'center'} width={1} height={1}>
              <Divider
                sx={{
                  borderStyle: 'dotted',
                  borderColor: 'lightgray',
                  display: 'inline-block',
                  width: '60%'
                  // height: '1px'
                }}
              />
            </Stack>
          )}
        </Grid>
        <Grid xs={2} sm={4}>
          <Typography variant={'Body1'} sx={{ width: '100%' }} textAlign={'right'}>
            50%
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}

const CourseInfo = ({ level }: { level: ILevel }) => {
  return (
    <Stack spacing={[1, 4]} width={1} pt={0.5} pb={[0, 3.5]} direction={'column'} justifyContent={'space-between'}>
      <Typography variant={'Subtitle1Emphasis'}>{`< ${level.week}주차 > - ${level.title}`}</Typography>
      {/* <Stack spacing={2}> */}
      {level.subLevels.map((subLevel) => (
        <Grid container sx={{ width: '100%' }}>
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
      <Typography variant={'Title3Emphasis'}>수강 과목</Typography>
      <Stack direction={'column'} spacing={5}>
        {levelList.map((level) => (
          <Course level={level} />
        ))}
      </Stack>
    </Stack>
  )
}

export default CourseList
