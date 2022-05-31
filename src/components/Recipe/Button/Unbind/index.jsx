import { memo } from 'react'

import { IconButton, Button } from 'components'
import { BrokenLinkUnlinkAttachment1 } from 'components/Icons/Interface'

function UnbindButton({
  children,
  variant = 'ghost',
  type = children ? 'button' : 'icon',
  ...rest
}) {
  const IconButtonType = () => {
    return (
      <IconButton
        colorScheme="red"
        variant={variant}
        icon={<BrokenLinkUnlinkAttachment1 />}
        {...rest}
      >
        {children}
      </IconButton>
    )
  }

  const ButtonType = () => {
    return (
      <Button
        colorScheme="red"
        variant={variant}
        leftIcon={<BrokenLinkUnlinkAttachment1 />}
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

export default memo(UnbindButton)
