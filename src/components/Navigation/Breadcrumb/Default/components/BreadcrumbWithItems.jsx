import { memo } from 'react'
import { Breadcrumb, useColorModeValue } from '@chakra-ui/react'

import { BreadcrumbLink, BreadcrumbItem } from 'components'

function BreadcrumbOptions({ items, ...rest }) {
  const weakText = useColorModeValue('gray.100', 'gray.600')

  return (
    <Breadcrumb {...rest}>
      {items.map(({ label, href, isCurrentPage }) => (
        <BreadcrumbItem color={isCurrentPage ? weakText : 'primary'} key={href}>
          <BreadcrumbLink
            isCurrentPage={isCurrentPage}
            cursor={isCurrentPage ? 'not-allowed' : 'pointer'}
            transition="all 0.4s"
            href={href}
            _hover={{ textDecoration: 'underline' }}
          >
            {label}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  )
}

export default memo(BreadcrumbOptions)
