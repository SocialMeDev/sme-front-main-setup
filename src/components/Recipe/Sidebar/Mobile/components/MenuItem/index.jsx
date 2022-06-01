import { memo } from 'react'
import { useRouter } from 'next/router'
import { useColorModeValue } from '@chakra-ui/react'

import { Icon, Button } from 'components'

function MenuItem({ groupHref, item }) {
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
    >
      {item.label}
    </Button>
  )
}

export default memo(MenuItem)
