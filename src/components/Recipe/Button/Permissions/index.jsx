import { memo } from 'react'

import { IconButton, Button } from 'components'
import { RoomKey } from 'components/Icons/Hotels'

function GroupButton({
  children,
  variant = 'ghost',
  type = children ? 'button' : 'icon',
  ...rest
}) {
  const IconButtonType = () => {
    return (
      <IconButton
        variant={variant}
        colorScheme="gray"
        icon={<RoomKey />}
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
        colorScheme="gray"
        leftIcon={<RoomKey />}
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

export default memo(GroupButton)
