import { memo } from 'react'
import { useBreakpointValue } from '@chakra-ui/react'

import MobileView from './Mobile'
import DesktopView from './Desktop'

function SideBar(props) {
  const isMobile = useBreakpointValue({ base: true, md: false })

  if (isMobile) {
    return <MobileView {...props} />
  }

  return <DesktopView {...props} />
}

export default memo(SideBar)
