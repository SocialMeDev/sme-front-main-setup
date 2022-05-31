import { memo } from 'react'
import { useColorModeValue } from '@chakra-ui/react'

import { Box, Flex, Image, Text, NextLink } from 'components'
import { getFileImage } from 'utils/assets'
import { getFormatedBytes } from 'utils/transforms/number'

function FileItem({ id, public_url, extension, name, size }) {
  return (
    <NextLink key={id} target="_blank" href={public_url}>
      <Flex
        p={2}
        cursor="pointer"
        transition="all 0.4s"
        rounded="md"
        _hover={{ bg: useColorModeValue('gray.100', 'gray.600') }}
        gap={2}
      >
        <Image boxSize="40px" src={getFileImage(extension)} />
        <Box>
          <Text>{name}</Text>
          <Text variant="secondary">
            {extension} {size && getFormatedBytes(size)}
          </Text>
        </Box>
      </Flex>
    </NextLink>
  )
}

export default memo(FileItem)
