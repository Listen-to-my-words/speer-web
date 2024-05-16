import React from 'react'
import { Avatar, Box, Stack, Typography } from '@mui/material'
import useProfileStore from '../../states/useProfileStore'
import BorderLinearProgress from '../BorderLinearProgress'
import { IProgress } from '../../types/IProgress'

const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <Stack
      direction={'row'}
      alignItems={'center'}
      justifyContent={['center', 'space-between']}
      spacing={2}
      sx={{ width: '100%', paddingLeft: [0, '11rem'], boxSizing: 'border-box', maxWidth: '48rem' }}
    >
      <Typography variant={'Body1'} sx={{ wordBreak: 'keep-all' }}>
        진행도
      </Typography>
      <BorderLinearProgress
        value={progress}
        sx={{
          width: ['10rem', '100%'],
          maxWidth: '30rem',
          height: ['0.5rem', '1.25rem']
        }}
      />
      <Typography variant={'Body1'} color={'text.secondary'}>
        {`${progress}%`}
      </Typography>
    </Stack>
  )
}

const ProfileMenu = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        backgroundColor: 'lightgray',
        borderRadius: ['0.5rem', '1rem'],
        boxShadow: '0px 4px 4px 0px #B0B0B040'
      }}
    />
  )
}

const ProfileInfo = ({ displayName, email }: { displayName: string; email: string }) => {
  return (
    <Stack
      direction={'column'}
      spacing={[2, 4]}
      px={2}
      mt={[1, 3]}
      sx={{
        width: '100%',
        maxWidth: '37rem'
      }}
    >
      <Typography variant={'Body1Emphasis'}>{`${displayName}(${email})`}</Typography>
      <Stack
        direction={'row'}
        spacing={[1, 4]}
        justifyContent={'space-around'}
        sx={{
          width: '100%',
          height: ['3rem', '6rem']
        }}
      >
        <ProfileMenu />
        <ProfileMenu />
        <ProfileMenu />
      </Stack>
    </Stack>
  )
}
// eslint-disable-next-line
const Profile = ({ progress }: { progress: IProgress }) => {
  const { profile } = useProfileStore()

  let total = 0
  let count = 0

  // eslint-disable-next-line
  for (const key in progress) {
    // eslint-disable-next-line
    if (progress.hasOwnProperty(key)) {
      const numbers = progress[key]
      // eslint-disable-next-line
      for (const num of numbers) {
        total += num
        count += 1
      }
    }
  }

  const progressAverage = total / count

  return (
    <Stack spacing={6}>
      <Stack direction={'row'} width={1}>
        <Avatar
          alt={'profile'}
          src={profile?.photoURL || ''}
          sx={{
            width: ['3.5rem', '10rem'],
            height: ['3.5rem', '10rem'],
            mb: [1, 4]
          }}
        />
        <ProfileInfo displayName={profile?.displayName || '익명'} email={profile?.email || '이메일 없음'} />
      </Stack>
      <ProgressBar progress={progressAverage} />
    </Stack>
  )
}

export default Profile
