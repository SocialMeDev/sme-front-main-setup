import { memo } from 'react'
import { Link } from '@chakra-ui/react'
import NextLink from 'next/link'

function CustomLink({ href, children, ...rest }) {
  return (
    <NextLink href={href} passHref>
      <Link as="a" _hover={{}} {...rest}>
        {children}
      </Link>
    </NextLink>
  )
}

export default memo(CustomLink)
