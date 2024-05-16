import { Box } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logo = () => {
  const navigate = useNavigate()
  return (
    <Box
      component={'img'}
      src={'/logo.png'}
      width={['5rem', '8rem']}
      height={['5rem', '8rem']}
      onClick={() => navigate('/')}
      sx={{ mb: [0, '2rem !important'], backgroundColor: '#fff' }}
    />
  )
}

export default Logo
