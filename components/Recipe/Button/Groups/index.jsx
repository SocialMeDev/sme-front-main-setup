import { memo } from 'react'

import { IconButton, Button } from 'components'
import { GroupCopy } from 'components/Icons/Interface'

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
        icon={<GroupCopy />}
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
        leftIcon={<GroupCopy />}
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
