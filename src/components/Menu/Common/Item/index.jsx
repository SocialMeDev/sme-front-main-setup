import { memo, forwardRef } from 'react'

import { MenuItem } from '@chakra-ui/react'

import { useSizeValue } from 'hooks'

const MenuItemDefault = forwardRef(
  ({ fontSize = useSizeValue('xs', 'sm', 'md'), children, ...rest }, ref) => {
    return (
      <MenuItem
        ref={ref}
        as="li"
        transition="all 0.4s"
        cursor="pointer"
        rounded="md"
        fontSize={fontSize}
        {...rest}
      >
        {children}
      </MenuItem>
    )
  }
)

export default memo(MenuItemDefault)
