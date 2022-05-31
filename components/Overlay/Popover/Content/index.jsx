import { memo } from 'react'

import { PopoverContent } from '@chakra-ui/react'

const PopoverContentDefault = ({ children, ...rest }) => {
  return <PopoverContent {...rest}>{children}</PopoverContent>
}

export default memo(PopoverContentDefault)
