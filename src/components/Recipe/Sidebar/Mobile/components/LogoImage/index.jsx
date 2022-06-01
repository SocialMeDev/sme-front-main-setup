import { memo, Fragment } from 'react'
import { useColorModeValue } from '@chakra-ui/react'

import { Image } from 'components'
import files from 'constants/files'

function Logo() {
  const { logo, logoDark } = files

  const mainLogo = useColorModeValue(logo, logoDark)

  return (
    <Fragment>
      <Image
        src={mainLogo}
        fallbackSrc={mainLogo}
        alt="Logo do sistema"
        h="45px"
      />
    </Fragment>
  )
}

export default memo(Logo)
