import { memo } from 'react'

import { MenuDivider } from '@chakra-ui/react'

function MenuDividerDefault(props) {
  return <MenuDivider {...props} />
}

export default memo(MenuDividerDefault)
