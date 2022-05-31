import { memo } from 'react'

import { IconButton, Button } from 'components'
import { DoneCheck3 } from 'components/Icons/Interface'

function AcceptButton({
  children,
  variant = 'ghost',
  type = children ? 'button' : 'icon',
  ...rest
}) {
  const IconButtonType = () => {
    return (
      <IconButton
        variant={variant}
        colorScheme="green"
        icon={<DoneCheck3 />}
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
        colorScheme="green"
        leftIcon={<DoneCheck3 />}
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

export default memo(AcceptButton)
