import { memo } from 'react'
import { Icon, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import { useRouter } from 'next/router'

function MenuItem({ groupHref, item }) {
  const bg = useColorModeValue('primary.300', 'primary.700')
  const activeBg = useColorModeValue('primary.400', 'primary.600')
  const color = useColorModeValue('white', 'whiteAlpha.800')
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
    <Flex
      onClick={() => push(`${groupHref}${item.href}`)}
      as="button"
      align="center"
      px={1}
      py={2}
      mb={1}
      rounded="md"
      transition="all 0.2s"
      cursor="pointer"
      color={isActive && color}
      bg={isActive && activeBg}
      minW="100%"
      _hover={
        !isActive && {
          bg,
          color
        }
      }
    >
      <Flex>
        <Flex>
          <Icon boxSize="5" ml="4px" as={item.icon} />
        </Flex>

        <Text ml={2} transition="font-size 0.4s">
          {item.label}
        </Text>
      </Flex>
    </Flex>
  )
}

export default memo(MenuItem)
