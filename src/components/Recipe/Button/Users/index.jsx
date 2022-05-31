import { memo } from 'react'

import { IconButton, Button } from 'components'
import { GroupUser1 } from 'components/Icons/Users'

function UsersButton({
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
        icon={<GroupUser1 />}
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
        leftIcon={<GroupUser1 />}
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

export default memo(UsersButton)
