import { memo } from 'react'
import { useColorModeValue } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { Tooltip, Icon, Button } from 'components'
import { useSidebar } from 'contexts/Sidebar/Provider'

function MenuItem({ groupHref, item }) {
  const { isOpen } = useSidebar()
  const { push, asPath } = useRouter()

  let isActive = false

  if (groupHref) {
    if (
      asPath === `${groupHref}${item.href}` ||
      asPath.startsWith(`${groupHref}${item.href}`)
    ) {
      isActive = true
    }
  } else if (item.href === '/') {
    if (asPath === item.href) {
      isActive = true
    }
  } else if (asPath === item.href || asPath.startsWith(item.href)) {
    isActive = true
  }

  return (
    <Tooltip
      gutter={9}
      placement="right"
      label={item.label}
      display={isOpen ? 'none' : 'block'}
    >
      <Button
        onClick={() => push(`${groupHref}${item.href}`)}
        leftIcon={<Icon as={item.icon} />}
        w="full"
        justifyContent="flex-start"
        variant="ghost"
        mb={1}
        color="dark"
        bg={isActive && useColorModeValue('primary.200', 'primary.800')}
        _focus={
          !isActive && {
            bg: useColorModeValue('primary.100', 'primary.700')
          }
        }
        css={{
          '.chakra-button__icon': {
            marginInlineEnd: isOpen ? '0.5rem' : '0rem'
          }
        }}
        {...(isActive && {
          _hover: {
            bg: useColorModeValue('primary.200', 'primary.800')
          }
        })}
      >
        {isOpen && item.label}
      </Button>
    </Tooltip>
  )
}

export default memo(MenuItem)
