import { memo, Fragment } from 'react'

import MenuItemLoader from '../Loading'
import { MenuItem } from 'components'
import { GroupCopy } from 'components/Icons/Interface'

function MenuItemGroups({
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
        <MenuItem icon={<GroupCopy />} {...rest}>
          {children}
        </MenuItem>
      )}
    </Fragment>
  )
}

export default memo(MenuItemGroups)
