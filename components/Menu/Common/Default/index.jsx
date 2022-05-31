import { memo, forwardRef } from 'react'

import { Menu } from '@chakra-ui/react'

const MenuDefault = forwardRef(({ children, ...rest }, ref) => {
  return (
    <Menu ref={ref} {...rest}>
      {children}
    </Menu>
  )
})

export default memo(MenuDefault)
