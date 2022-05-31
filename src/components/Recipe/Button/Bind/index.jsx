import { memo } from 'react'

import { IconButton, Button } from 'components'
import { AttachmentLink } from 'components/Icons/Interface'

function BindButton({
  children,
  variant = 'outline',
  type = children ? 'button' : 'icon',
  ...rest
}) {
  const IconButtonType = () => {
    return (
      <IconButton variant={variant} icon={<AttachmentLink />} {...rest}>
        {children}
      </IconButton>
    )
  }

  const ButtonType = () => {
    return (
      <Button variant={variant} leftIcon={<AttachmentLink />} {...rest}>
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

export default memo(BindButton)
