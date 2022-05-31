import { memo } from 'react'

import { BreadcrumbLink } from '@chakra-ui/react'
import { useSizeValue } from 'hooks'

function BreadcrumbLinkDefault({
  children,
  fontSize = useSizeValue('sm', 'md', 'lg'),
  ...rest
}) {
  return (
    <BreadcrumbLink fontSize={fontSize} {...rest}>
      {children}
    </BreadcrumbLink>
  )
}

export default memo(BreadcrumbLinkDefault)
