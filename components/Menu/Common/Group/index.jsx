import { memo } from 'react'

import { MenuGroup } from '@chakra-ui/react'

function MenuGroupDefault({ children, ...rest }) {
  return <MenuGroup {...rest}>{children}</MenuGroup>
}

export default memo(MenuGroupDefault)
