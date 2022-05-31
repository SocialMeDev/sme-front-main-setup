import { forwardRef, memo } from 'react'

import { Popover } from '@chakra-ui/react'

const PopoverDefault = forwardRef(({ children, ...rest }, ref) => {
  return (
    <Popover {...rest} ref={ref}>
      {children}
    </Popover>
  )
})

export default memo(PopoverDefault)
