import { Box, Center, Flex, Text, Heading, SlideFade } from '@chakra-ui/react'

import { Search1 } from 'components/Icons/Interface'
import { NextLink } from 'components'

export default function LinkItem({ item }) {
  return (
    <NextLink href={item.href} w="100%">
      <SlideFade in={true} offsetY={16}>
        <Flex
          bg="weakBg"
          w="100%"
          h="60px"
          borderRadius={'md'}
          px={4}
          py={2}
          align="center"
          cursor="pointer"
          _hover={{ bg: 'activeBg', color: 'lightColor' }}
        >
          <Center>
            <Search1 />
          </Center>
          <Box mx={4}>
            <Text>{item.page}</Text>
            <Heading size="sm">{item.action}</Heading>
          </Box>
        </Flex>
      </SlideFade>
    </NextLink>
  )
}
