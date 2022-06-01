import { memo } from 'react'
import { Link } from '@chakra-ui/react'

function LinkDefault({ children, href, ...rest }) {
  return (
    <Link
      href={href}
      _hover={{ color: 'primary', textDecoration: 'none' }}
      {...rest}
    >
      {children}
    </Link>
  )
}

export default memo(LinkDefault)
