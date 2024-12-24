import { useRef, useState } from 'react'

import { useClickOutside } from './useClickOutside'

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const modalRef = useRef<HTMLDivElement | null>(null)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  useClickOutside(modalRef, () => {
    if (isOpen) {
      closeModal()
    }
  })

  return { isOpen, openModal, closeModal, modalRef }
}
