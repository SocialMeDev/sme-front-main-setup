import { memo } from 'react'

import { Image, Center, NextLink } from 'components'

function LogoWithLink({ src, alt, href, ...rest }) {
  return (
    <NextLink w="100%" href={href || '/'}>
      <Center
        h="51px"
        borderBottomWidth={1}
        transition="all 0.4s"
        _hover={{ bg: 'bgContainer' }}
        {...rest}
      >
        <Image src={src} fallbackSrc={src} alt={alt} h="45px" />
      </Center>
    </NextLink>
  )
}

export default memo(LogoWithLink)
