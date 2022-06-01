import { memo } from 'react'

import { MenuItem } from 'components'
import { PenEdit5 } from 'components/Icons/Interface'

function MenuItemUpdate({ children, ...rest }) {
  return (
    <MenuItem icon={<PenEdit5 color="dark" />} {...rest}>
      {children}
    </MenuItem>
  )
}

export default memo(MenuItemUpdate)
