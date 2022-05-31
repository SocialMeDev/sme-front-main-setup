import { memo } from 'react'

import { IconButton, Button } from 'components'
import { Eye5 } from 'components/Icons/Interface'

function DetailsButton({
  children,
  colorScheme = 'gray',
  variant = 'ghost',
  type = children ? 'button' : 'icon',
  ...rest
}) {
  const IconButtonType = () => {
    return (
      <IconButton
        colorScheme={colorScheme}
        variant={variant}
        icon={<Eye5 />}
        {...rest}
      >
        {children}
      </IconButton>
    )
  }

  const ButtonType = () => {
    return (
      <Button
        colorScheme={colorScheme}
        variant={variant}
        leftIcon={<Eye5 />}
        {...rest}
      >
        {children}
      </Button>
    )
  }

  const types = {
    icon: <IconButtonType />,
    button: <ButtonType />
  }

  return types[type]
}

export default memo(DetailsButton)
