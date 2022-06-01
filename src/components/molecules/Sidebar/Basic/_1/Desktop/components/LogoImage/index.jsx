import { memo, Fragment } from 'react'
import { Image, useColorModeValue } from '@chakra-ui/react'

import { useSidebar } from 'contexts/Sidebar/Provider'
import files from 'constants/files'

function Logo() {
  const { isOpen } = useSidebar()

  const { logo, logoDark, miniLogo, miniLogoDark } = files

  const collapseLogo = useColorModeValue(miniLogo, miniLogoDark)
  const desktopLogo = useColorModeValue(logo, logoDark)

  return (
    <Fragment>
      {isOpen ? (
        <Image
          src={desktopLogo}
          fallbackSrc={desktopLogo}
          alt="Logo do sistema"
          h="50px"
        />
      ) : (
        <Image
          src={collapseLogo}
          fallbackSrc={collapseLogo}
          alt="Logo do sistema"
          h="50px"
        />
      )}
    </Fragment>
  )
}

export default memo(Logo)
