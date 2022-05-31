import { memo } from 'react'

import { PopoverHeader } from '@chakra-ui/react'

const PopoverHeaderDefault = ({ children, ...rest }) => {
  return <PopoverHeader {...rest}>{children}</PopoverHeader>
}

export default memo(PopoverHeaderDefault)
