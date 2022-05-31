import { memo } from 'react'

import { Button } from 'components'
import { WorldSquare } from 'components/Icons/SocialMedia'

function OrganizationUnitButton({ children, variant = 'ghost', ...rest }) {
  return (
    <Button
      variant={variant}
      colorScheme="gray"
      leftIcon={<WorldSquare />}
      {...rest}
    >
      {children}
    </Button>
  )
}

export default memo(OrganizationUnitButton)
