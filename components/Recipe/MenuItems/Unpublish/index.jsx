import { memo, Fragment } from 'react'

import MenuItemLoader from '../Loading'
import { MenuItem } from 'components'
import { DeleteDisabledRossHexagon } from 'components/Icons/Interface'

function MenuItemUnpublish({
  isLoading = false,
  loadingText = 'Despublicando...',
  children,
  ...rest
}) {
  return (
    <Fragment>
      {isLoading ? (
        <MenuItemLoader text={loadingText} />
      ) : (
        <MenuItem icon={<DeleteDisabledRossHexagon />} color="danger" {...rest}>
          {children}
        </MenuItem>
      )}
    </Fragment>
  )
}

export default memo(MenuItemUnpublish)
