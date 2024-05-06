import { Box } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logo = () => {
  const navigate = useNavigate()
  return (
    <Box
      component={'img'}
      src={'https://picsum.photos/90'}
      width={'8rem'}
      height={'8rem'}
      onClick={() => navigate('/')}
    />
  )
}

export default Logo
