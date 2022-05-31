import { memo } from 'react'

import { MenuItem } from 'components'
import { DocumentsFileBlank } from 'components/Icons/Files'

function MenuItemFiles({ children, ...rest }) {
  return (
    <MenuItem icon={<DocumentsFileBlank color="dark" />} {...rest}>
      {children}
    </MenuItem>
  )
}

export default memo(MenuItemFiles)
