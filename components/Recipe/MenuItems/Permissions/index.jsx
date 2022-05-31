import { memo, Fragment } from 'react'

import MenuItemLoader from '../Loading'
import { MenuItem } from 'components'
import { RoomKey } from 'components/Icons/Hotels'

function MenuItemPermissions({
  isLoading = false,
  loadingText = 'Carregando...',
  children,
  ...rest
}) {
  return (
    <Fragment>
      {isLoading ? (
        <MenuItemLoader text={loadingText} />
      ) : (
        <MenuItem icon={<RoomKey />} {...rest}>
          {children}
        </MenuItem>
      )}
    </Fragment>
  )
}

export default memo(MenuItemPermissions)
