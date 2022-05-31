import { memo } from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useStyleConfig
} from '@chakra-ui/react'

function CustomBreadcrumb({ fontWeight, fontSize, items, ...rest }) {
  const styles = useStyleConfig('CustomBreadcrumb', { fontWeight, fontSize })

  return (
    <Breadcrumb
      fontWeight={fontWeight}
      fontSize={fontSize}
      sx={styles}
      {...rest}
    >
      {items.map((item) => (
        <BreadcrumbItem key={item.label} isCurrentPage={item.isCurrentPage}>
          <BreadcrumbLink
            href={item.href}
            _hover={{ color: 'hoverBg', textDecoration: 'underline' }}
          >
            {item.label}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  )
}

export default memo(CustomBreadcrumb)
