import { memo } from 'react'

import { PopoverArrow } from '@chakra-ui/react'

const PopoverArrowDefault = ({ children, ...rest }) => {
  return <PopoverArrow {...rest}>{children}</PopoverArrow>
}

export default memo(PopoverArrowDefault)
