import { memo } from 'react'
import { Link } from '@chakra-ui/react'
import NextLink from 'next/link'

import { useSizeValue } from 'hooks'

function CustomNextLink({
  fontSize = useSizeValue('xs', 'sm', 'md'),
  download = false,
  href,
  children,
  ...rest
}) {
  return (
    <NextLink href={href} passHref>
      <Link
        fontSize={fontSize}
        _hover={{ textDecoration: 'none' }}
        download={download}
        {...rest}
      >
        {children}
      </Link>
    </NextLink>
  )
}

export default memo(CustomNextLink)
