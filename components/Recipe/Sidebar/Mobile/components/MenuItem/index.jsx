import { memo } from 'react'
import { useRouter } from 'next/router'

import { Box, Flex, Text, Icon } from 'components'
import { useSidebar } from 'contexts/Sidebar/Provider'
import { useSizeValue } from 'hooks'

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
    <Box p={!isOpen && 1}>
      <Flex
        onClick={() => push(`${groupHref}${item.href}`)}
        w="100%"
        as="button"
        align="center"
        justify={isOpen ? 'flex-start' : 'center'}
        bg={isActive ? 'primary' : 'bgContent'}
        color={isActive ? 'light' : 'dark'}
        p={useSizeValue(1, 1.5, 2)}
        gap={isOpen && useSizeValue(2, 3, 4)}
        mb={isOpen && 1}
        _hover={!isActive && { bg: 'lightPrimary' }}
        _focus={!isActive && { bg: 'lightPrimary' }}
      >
        <Icon as={item.icon} />
        {isOpen ? (
          <Text transition="all 0.4s">{item.label}</Text>
        ) : (
          <Text transition="all 0.4s" fontSize={0}>
            {item.label}
          </Text>
        )}
      </Flex>
    </Box>
  )
}

export default memo(MenuItem)
