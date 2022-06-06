import { memo } from 'react'

import { IconButton } from 'components'
import { PenEdit5 } from 'components/Icons/Interface'

function UpdateButton({
  children,
  variant = 'ghost',
  colorScheme = 'gray',
  color = 'dark',
  ...rest
}) {
  return (
    <IconButton
      variant={variant}
      colorScheme={colorScheme}
      icon={<PenEdit5 color={color} />}
      {...rest}
    >
      {children}
    </IconButton>
  )
}

export default memo(UpdateButton)
