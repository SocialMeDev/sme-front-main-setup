import { memo } from 'react'
import { Breadcrumb } from '@chakra-ui/react'

import BreadcrumbWithItems from './components/BreadcrumbWithItems'

function BreadcrumbDefault({ children, items, ...rest }) {
  if (items) {
    return <BreadcrumbWithItems items={items} {...rest} />
  }

  return <Breadcrumb {...rest}>{children}</Breadcrumb>
}

export default memo(BreadcrumbDefault)
