import { memo } from 'react'
import { Icon, Flex, Text, Tooltip } from '@chakra-ui/react'
import { useRouter } from 'next/router'

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
      gutter="10"
      placement="right"
      label={item.label}
      display={isOpen ? 'none' : 'block'}
    >
      <Flex
        onClick={() => push(`${groupHref}${item.href}`)}
        as="button"
        align="center"
        px={2}
        py={2}
        mb={1}
        rounded="md"
        color={isActive && 'hoverColor'}
        bg={isActive && 'activeBg'}
        minW="100%"
        _hover={
          !isActive && {
            bg: 'hoverBg',
            color: 'hoverColor'
          }
        }
      >
        <Flex>
          <Icon boxSize="5" as={item.icon} />

          {isOpen ? (
            <Text ml={2} transition="font-size 0.4s" fontSize="sm">
              {item.label}
            </Text>
          ) : (
            <Text fontSize="0">{item.label}</Text>
          )}
        </Flex>
      </Flex>
    </Tooltip>
  )
}

export default memo(MenuItem)
