import { memo } from 'react'

import { useColorModeValue } from 'hooks'
import { Image, Center, NextLink, Tooltip } from 'components'
import { logo, logoDark, miniLogo, miniLogoDark } from 'constants/logos'

function LogoWithLink({ isOpen, href, label, placement, ...rest }) {
  const srcLogo = useColorModeValue(logo, logoDark)
  const srcMiniLogo = useColorModeValue(miniLogo, miniLogoDark)

  const src = isOpen ? srcLogo : srcMiniLogo

  return (
    <NextLink w="100%" href={href || '/'}>
      <Tooltip
        hasArrow
        placement={placement || 'right'}
        label={label}
        fontSize="sm"
      >
        <Center
          h="51px"
          borderBottomWidth={1}
          transition="all 0.4s"
          _hover={{ bg: 'bgContainer' }}
          {...rest}
        >
          <Image src={src} fallbackSrc={src} alt="Logo do sistema" h="45px" />
        </Center>
      </Tooltip>
    </NextLink>
  )
}

export default memo(LogoWithLink)
