import { memo } from 'react'

import { IconButton } from 'components'
import { PenEdit5 } from 'components/Icons/Interface'

function UpdateButton({ children, ...rest }) {
  return (
    <IconButton
      variant="ghost"
      colorScheme="gray"
      icon={<PenEdit5 color="dark" />}
      {...rest}
    >
      {children}
    </IconButton>
  )
}

export default memo(UpdateButton)
