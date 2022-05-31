import { memo } from 'react'

import { IconButton, Button } from 'components'
import { PinLocation } from 'components/Icons/MapsNavigation'

function PlaceButton({
  children,
  colorScheme = 'gray',
  variant = 'ghost',
  type = children ? 'button' : 'icon',
  ...rest
}) {
  const IconButtonType = () => {
    return (
      <IconButton
        variant={variant}
        colorScheme={colorScheme}
        icon={<PinLocation />}
        {...rest}
      >
        {children}
      </IconButton>
    )
  }

  const ButtonType = () => {
    return (
      <Button
        variant={variant}
        colorScheme={colorScheme}
        leftIcon={<PinLocation />}
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

export default memo(PlaceButton)
