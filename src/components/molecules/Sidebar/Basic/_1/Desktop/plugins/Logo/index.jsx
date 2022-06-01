import { memo } from 'react'
import { Center } from '@chakra-ui/react'

import LogoImage from 'components/molecules/Sidebar/Basic/_1/Desktop/components/LogoImage'

function SidebarLogo({ ...rest }) {
  return (
    <Center borderBottomWidth={1} {...rest}>
      <LogoImage />
    </Center>
  )
}

export default memo(SidebarLogo)
