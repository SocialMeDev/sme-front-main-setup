import { memo } from 'react'

import { Stack } from 'components'
import { MenuList } from '@chakra-ui/react'

function MenuListDefault({ children, ...rest }) {
  return (
    <MenuList p={2} {...rest}>
      <Stack spacing={1}>{children}</Stack>
    </MenuList>
  )
}

export default memo(MenuListDefault)
