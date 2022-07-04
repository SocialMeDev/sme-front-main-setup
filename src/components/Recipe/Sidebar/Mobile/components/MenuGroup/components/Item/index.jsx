import { memo } from 'react'
import { useRouter } from 'next/router'

import { Box, Flex, Text, Icon } from 'components'
import { useSizeValue } from 'hooks'

function MenuItem({ groupHref, item }) {
  const { push, asPath } = useRouter()

  let isActive = false

  if (groupHref) {
    if (
      asPath === `${groupHref}${item.href}/` ||
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
    <Box>
      <Flex
        onClick={() => push(`${groupHref ? groupHref : ''}${item.href}`)}
        w="100%"
        as="button"
        align="center"
        bg={isActive ? 'primary' : 'bgContent'}
        color={isActive ? 'light' : 'dark'}
        p={useSizeValue(1, 1.5, 2)}
        gap={useSizeValue(2, 3, 4)}
        mb={1}
        _hover={!isActive && { bg: 'lightPrimary' }}
        _focus={!isActive && { bg: 'lightPrimary' }}
      >
        <Icon as={item.icon} />

        <Text transition="all 0.4s">{item.label}</Text>
      </Flex>
    </Box>
  )
}

export default memo(MenuItem)
