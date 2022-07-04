import { memo } from 'react'

import { useColorModeValue } from 'hooks'
import { Image, Center } from 'components'
import { logo, logoDark, miniLogo, miniLogoDark } from 'constants/logos'

function LogoImage({ isOpen, ...rest }) {
  const srcLogo = useColorModeValue(logo, logoDark)
  const srcMiniLogo = useColorModeValue(miniLogo, miniLogoDark)

  const src = isOpen ? srcLogo : srcMiniLogo

  return (
    <Center borderBottomWidth={1} borderColor="borderColor" h="51px" {...rest}>
      <Image src={src} fallbackSrc={src} alt="Logo do sistema" h="45px" />
    </Center>
  )
}

export default memo(LogoImage)
