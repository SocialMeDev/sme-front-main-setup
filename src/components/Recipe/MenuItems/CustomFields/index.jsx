import { memo } from 'react'

import { MenuItem } from 'components'
import { PenEdit1 } from 'components/Icons/Interface'

function MenuItemCustomFields({ children, ...rest }) {
  return (
    <MenuItem icon={<PenEdit1 color="dark" />} {...rest}>
      {children}
    </MenuItem>
  )
}

export default memo(MenuItemCustomFields)
