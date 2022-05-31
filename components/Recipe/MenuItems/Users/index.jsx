import { memo, Fragment } from 'react'

import MenuItemLoader from '../Loading'
import { MenuItem } from 'components'
import { GroupUser1 } from 'components/Icons/Users'

function MenuItemUsers({
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
        <MenuItem icon={<GroupUser1 />} {...rest}>
          {children}
        </MenuItem>
      )}
    </Fragment>
  )
}

export default memo(MenuItemUsers)
