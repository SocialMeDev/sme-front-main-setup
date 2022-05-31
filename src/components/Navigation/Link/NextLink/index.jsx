import { memo } from 'react'
import { Link } from '@chakra-ui/react'
import NextLink from 'next/link'

function CustomLink({ download = false, href, children, ...rest }) {
  return (
    <NextLink href={href} passHref>
      <Link _hover={{ textDecoration: 'none' }} download={download} {...rest}>
        {children}
      </Link>
    </NextLink>
  )
}

export default memo(CustomLink)
