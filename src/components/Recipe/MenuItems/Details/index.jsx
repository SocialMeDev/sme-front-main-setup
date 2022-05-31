import { memo } from 'react'

import { MenuItem } from 'components'
import { Eye5 } from 'components/Icons/Interface'

function MenuItemDetails({ children, ...rest }) {
  return (
    <MenuItem icon={<Eye5 color="dark" />} {...rest}>
      {children}
    </MenuItem>
  )
}

export default memo(MenuItemDetails)
