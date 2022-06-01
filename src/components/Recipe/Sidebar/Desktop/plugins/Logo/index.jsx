import { memo } from 'react'

import { Center } from 'components'
import LogoImage from '../../components/LogoImage'

function SidebarLogo({ ...rest }) {
  return (
    <Center borderBottomWidth={1} borderColor="borderColor" h="51px" {...rest}>
      <LogoImage />
    </Center>
  )
}

export default memo(SidebarLogo)
