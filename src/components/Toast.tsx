import { Alert, Snackbar, Typography } from '@mui/material'
import React from 'react'

const Toast = ({
  open,
  handleClose,
  message,
  severity
}: {
  open: boolean
  handleClose: () => void
  message: string
  severity?: 'success' | 'error' | 'info'
}) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity} variant={'filled'} sx={{ width: '100%' }}>
        <Typography variant={'Body1'}>{message}</Typography>
      </Alert>
    </Snackbar>
  )
}

export default Toast
