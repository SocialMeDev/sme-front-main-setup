import { memo } from 'react'

import { PopoverBody } from '@chakra-ui/react'

const PopoverBodyDefault = ({ children, ...rest }) => {
  return <PopoverBody {...rest}>{children}</PopoverBody>
}

export default memo(PopoverBodyDefault)
