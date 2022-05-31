import { memo } from 'react'
import { useColorModeValue } from '@chakra-ui/react'

import { Center, Link } from 'components'
import LogoImage from '../../components/LogoImage'

function GoBackLogo({ href, ...rest }) {
  const bg = useColorModeValue('primary.200', 'primary.800')

  return (
    <Link href={href}>
      <Center
        borderBottomWidth={1}
        borderColor="borderColor"
        transition="all 0.4s"
        h="51px"
        _hover={{ bg }}
        {...rest}
      >
        <LogoImage />
      </Center>
    </Link>
  )
}

export default memo(GoBackLogo)
