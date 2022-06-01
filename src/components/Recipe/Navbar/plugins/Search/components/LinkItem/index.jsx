import { Box, Center, Flex, Text, Heading, SlideFade } from '@chakra-ui/react'

import { Search1 } from 'components/atoms/Icons/Interface'
import { Link } from 'components/atoms/Link/Basic'

export default function LinkItem({ item }) {
  return (
    <Link href={item.href} w="100%">
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
    </Link>
  )
}
