import { useCallback, useState } from 'react'

export default function useDisclosure(defaultIsOpen = false) {
  const [isOpen, setIsOpen] = useState(defaultIsOpen)

  const onOpen = useCallback(() => {
    setIsOpen(true)
  }, [])

  const onClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  const onToggle = useCallback(() => {
    setIsOpen((oldValue) => !oldValue)
  }, [])

  return { isOpen, onOpen, onClose, onToggle }
}
