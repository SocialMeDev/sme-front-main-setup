import { memo, forwardRef } from 'react'

import { MenuButton, IconButton } from 'components'

import { Dots } from 'components/Icons/Interface'

const DotsButton = forwardRef(({ children, ...rest }, ref) => {
  return (
    <MenuButton
      ref={ref}
      as={IconButton}
      icon={<Dots color="dark" />}
      colorScheme="gray"
      variant="ghost"
      {...rest}
    >
      {children}
    </MenuButton>
  )
})

export default memo(DotsButton)
