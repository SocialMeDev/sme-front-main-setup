import { useEffect, useContext } from 'react'
import { useDisclosure, useBreakpointValue } from 'hooks'

import SidebarContext from './Context'

export default function SidebarDrawerProvider({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const isMobile = useBreakpointValue({ base: true, md: false })

  useEffect(() => {
    if (isMobile) {
      return onClose()
    }
    onOpen()
  }, [onOpen, onClose, isMobile])

  return (
    <SidebarContext.Provider value={{ isOpen, onOpen, onClose }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => useContext(SidebarContext)
