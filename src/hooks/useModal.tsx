import { useState } from 'react'
import { Modal } from '@mui/material'

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return { Modal, isOpen, openModal, closeModal, setIsOpen }
}

export default useModal
