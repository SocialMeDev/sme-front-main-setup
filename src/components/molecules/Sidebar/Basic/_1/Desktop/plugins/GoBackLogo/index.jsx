import { memo } from 'react'
import { Tooltip, Center, useColorModeValue } from '@chakra-ui/react'

import { LinkWrapper } from 'components/atoms/Link/Basic'
import LogoImage from 'components/molecules/Sidebar/Basic/_1/Desktop/components/LogoImage'

function GoBackLogo({ href, label, placement, ...rest }) {
  const bg = useColorModeValue('primary.100', 'primary.300')

  return (
    <LinkWrapper w="100%" href={href || '/'}>
      <Tooltip
        hasArrow
        placement={placement || 'left'}
        label={label}
        fontSize="md"
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
    </LinkWrapper>
  )
}

export default memo(GoBackLogo)
