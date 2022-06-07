import { memo, forwardRef } from 'react'

import { MenuButton, IconButton } from 'components'

import { Dots } from 'components/Icons/Interface'

const DotsButton = forwardRef(
  ({ children, colorScheme = 'gray', color = 'dark', ...rest }, ref) => {
    return (
      <MenuButton
        aria-label="Demostração do botão de menu padronizado"
        ref={ref}
        as={IconButton}
        icon={<Dots color={color} />}
        colorScheme={colorScheme}
        variant="ghost"
        {...rest}
      >
        {children}
      </MenuButton>
    )
  }
)

export default memo(DotsButton)
