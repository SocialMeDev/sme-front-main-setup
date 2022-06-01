import { memo } from 'react'
import { CloseIcon } from '@chakra-ui/icons'
import {
  Center,
  DrawerHeader,
  HStack,
  Heading,
  useColorModeValue
} from '@chakra-ui/react'

function CustomDrawerHeader({ title, onClose }) {
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.700')
  const color = useColorModeValue('white', 'whiteAlpha.800')
  const bg = useColorModeValue('red.500', 'red.200')

  return (
    <DrawerHeader
      px="4"
      py="2"
      borderBottom="1px solid"
      borderColor={borderColor}
    >
      <HStack justify="space-between">
        <Heading>{title}</Heading>

        <Center
          onClick={onClose}
          m="0"
          h="35px"
          w="35px"
          rounded="md"
          cursor="pointer"
          transition="all 0.2s"
          _hover={{ bg, color }}
        >
          <CloseIcon />
        </Center>
      </HStack>
    </DrawerHeader>
  )
}

export default memo(CustomDrawerHeader)
