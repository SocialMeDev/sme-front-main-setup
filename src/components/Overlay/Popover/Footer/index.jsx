import { memo } from 'react'

import { PopoverFooter } from '@chakra-ui/react'

const PopoverFooterDefault = ({ children, ...rest }) => {
  return <PopoverFooter {...rest}>{children}</PopoverFooter>
}

export default memo(PopoverFooterDefault)
