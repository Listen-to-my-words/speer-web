import React from 'react'
import { Box, Container, Stack } from '@mui/material'
import Nav from '../components/Nav'
import Logo from '../components/Logo'
import Footer from '../components/Footer'
import Auth from '../service/auth'
import Toast from '../components/Toast'
import { useToastStore } from '../states/useToastStore'

const RootLayout = ({ children, auth }: { children: React.ReactNode; auth: Auth }) => {
  const { toast, closeToast } = useToastStore()

  return (
    <>
      <Container
        maxWidth={'md'}
        sx={{
          pb: ['2rem', '8rem'],
          minHeight: '100vh'
        }}
      >
        <Stack spacing={2}>
          <Nav auth={auth} />
          <Logo />
          <Box>{children}</Box>
        </Stack>
      </Container>
      <Footer />
      {/* eslint-disable-next-line */}
      <Toast {...toast} handleClose={closeToast} />
    </>
  )
}
export default RootLayout
