import { memo } from 'react'

import { MenuItem, Loader } from 'components'

function MenuItemLoader({ text, ...rest }) {
  return (
    <MenuItem>
      <Loader p={1} direction="row" text={text} {...rest} />
    </MenuItem>
  )
}

export default memo(MenuItemLoader)
