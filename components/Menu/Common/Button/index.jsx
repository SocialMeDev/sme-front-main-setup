import { memo, forwardRef } from 'react'

import { MenuButton } from '@chakra-ui/react'

const MenuButtonDefault = forwardRef(({ children, ...rest }, ref) => {
  return (
    <MenuButton variant="ghost" ref={ref} {...rest}>
      {children}
    </MenuButton>
  )
})

export default memo(MenuButtonDefault)
