import { memo } from 'react'

import { IconButton } from 'components'
import { useSidebar } from 'contexts/Sidebar/Provider'
import { MenuArrowSquare } from 'components/Icons/Interface'

function SidebarDrawerButton() {
  const { isOpen, onOpen, onClose } = useSidebar()

  return (
    <IconButton
      aria-label="Menu"
      variant="ghost"
      onClick={isOpen ? onClose : onOpen}
      icon={
        <MenuArrowSquare
          transform={isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}
          transition="0.5s all"
        />
      }
      size="sm"
    />
  )
}

export default memo(SidebarDrawerButton)
