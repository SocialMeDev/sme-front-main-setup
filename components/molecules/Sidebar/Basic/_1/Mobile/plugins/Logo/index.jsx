import { memo } from 'react'
import Image from 'next/image'
import { Flex, useColorModeValue } from '@chakra-ui/react'

import files from 'constants/files'

function MobileLogo({ ...rest }) {
  const { logo, darkLogo } = files

  const image = useColorModeValue(logo, darkLogo)

  return (
    <Flex borderBottomWidth={1} {...rest}>
      <Image
        src={image}
        fallbackSrc={image}
        alt="Logo do sistema"
        boxSize="50px"
      />
    </Flex>
  )
}

export default memo(MobileLogo)
