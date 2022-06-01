import { memo } from 'react'
import { Image, Center, useColorModeValue } from '@chakra-ui/react'

import files from 'constants/files'
import { LinkWrapper } from 'components/atoms/Link/Basic'

function GoBackLogo({ href, ...rest }) {
  const bg = useColorModeValue('primary.200', 'primary.800')

  const { logo, logoDark } = files

  const imageLogo = useColorModeValue(logo, logoDark)

  return (
    <LinkWrapper href={href}>
      <Center
        borderBottomWidth={1}
        transition="all 0.4s"
        _hover={{ bg }}
        {...rest}
      >
        <Image
          src={imageLogo}
          fallbackSrc={imageLogo}
          alt="Logo do sistema"
          boxSize="50px"
        />
      </Center>
    </LinkWrapper>
  )
}

export default memo(GoBackLogo)
