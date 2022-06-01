import { memo } from 'react'

import { IconButton, Button } from 'components'
import { HammerLegal } from 'components/Icons/LegalLaw'

function JudgmentButton({
  children,
  variant = 'ghost',
  type = children ? 'button' : 'icon',
  ...rest
}) {
  const IconButtonType = () => {
    return (
      <IconButton variant={variant} icon={<HammerLegal />} {...rest}>
        {children}
      </IconButton>
    )
  }

  const ButtonType = () => {
    return (
      <Button variant={variant} leftIcon={<HammerLegal />} {...rest}>
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

export default memo(JudgmentButton)
