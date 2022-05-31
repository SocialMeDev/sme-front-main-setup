import { memo } from 'react'
import { Link, Text } from '@chakra-ui/react'

import NextLink from 'next/link'

function TextLink({ href, target, text, ...rest }) {
  return (
    <NextLink href={href} passHref>
      <Link
        target={target || '_self'}
        color="primary"
        _hover={{ transform: 'scale(1.05)', textDecoration: 'underline' }}
        {...rest}
      >
        <Text>{text}</Text>
      </Link>
    </NextLink>
  )
}

export default memo(TextLink)
