import React from 'react'
import { Box, Container, Stack } from '@mui/material'
import Nav from '../components/Nav'
import Logo from '../components/Logo'
import Footer from '../components/Footer'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Container maxWidth={'md'}>
        <Stack spacing={2}>
          <Nav />
          <Logo />
          <Box>{children}</Box>
        </Stack>
      </Container>
      <Footer />
    </>
  )
}
export default RootLayout
