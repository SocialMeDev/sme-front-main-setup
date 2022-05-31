import { memo } from 'react'

import { PopoverTrigger } from '@chakra-ui/react'

const PopoverTriggerDefault = ({ children, ...rest }) => {
  return <PopoverTrigger {...rest}>{children}</PopoverTrigger>
}

export default memo(PopoverTriggerDefault)
