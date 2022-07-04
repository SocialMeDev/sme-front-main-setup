import { memo } from 'react'

import { useColorModeValue } from 'hooks'
import { Image, Center } from 'components'
import { logo, logoDark } from 'constants/logos'

function LogoImage({ src, alt, ...rest }) {
  const openSidebarLogo = useColorModeValue(logo, logoDark)

  return (
    <Center borderBottomWidth={1} borderColor="borderColor" h="51px" {...rest}>
      <Image src={openSidebarLogo} fallbackSrc={src} alt={alt} h="45px" />
    </Center>
  )
}

export default memo(LogoImage)
