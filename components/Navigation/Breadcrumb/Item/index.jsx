import { memo } from 'react'

import { BreadcrumbItem } from '@chakra-ui/react'

function BreadcrumbItemDefault({ children, ...rest }) {
  return <BreadcrumbItem {...rest}>{children}</BreadcrumbItem>
}

export default memo(BreadcrumbItemDefault)
