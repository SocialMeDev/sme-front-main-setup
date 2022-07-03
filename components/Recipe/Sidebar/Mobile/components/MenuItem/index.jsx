import { memo } from 'react'
import { useRouter } from 'next/router'

import { Box, Flex, Text, Icon } from 'components'
import { useSizeValue } from 'hooks'

function MenuItem({ groupHref, item, onClose }) {
  const { push, asPath } = useRouter()

  let isActive = false

  if (asPath.indexOf(item.href) !== -1) isActive = true

  return (
    <Box>
      <Flex
        onClick={() => {
          push(`${groupHref ? groupHref : ''}${item.href}`)
          onClose()
        }}
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
        <Text>{item.label}</Text>
      </Flex>
    </Box>
  )
}

export default memo(MenuItem)
