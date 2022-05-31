import { memo } from 'react'
import { useColorModeValue } from '@chakra-ui/react'

import { Center, NextLink, Tooltip } from 'components'
import LogoImage from '../../components/LogoImage'

function GoBackLogo({ href, label, placement, ...rest }) {
  const bg = useColorModeValue('gray.50', 'gray.700')

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
          _hover={{ bg }}
          {...rest}
        >
          <LogoImage />
        </Center>
      </Tooltip>
    </NextLink>
  )
}

export default memo(GoBackLogo)
