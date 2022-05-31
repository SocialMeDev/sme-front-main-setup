import { memo, Fragment } from 'react'

import MenuItemLoader from '../Loading'
import { MenuItem } from 'components'
import { CertificateCheckmark } from 'components/Icons/Interface'

function MenuItemPublish({
  isLoading = false,
  loadingText = 'Publicando...',
  children,
  ...rest
}) {
  return (
    <Fragment>
      {isLoading ? (
        <MenuItemLoader text={loadingText} />
      ) : (
        <MenuItem icon={<CertificateCheckmark />} color="success" {...rest}>
          {children}
        </MenuItem>
      )}
    </Fragment>
  )
}

export default memo(MenuItemPublish)
