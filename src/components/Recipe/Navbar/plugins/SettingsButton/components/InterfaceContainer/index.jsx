import { Box, Flex, Heading, Text, Center } from 'components'
import { DoneCheck3 } from 'components/Icons/Interface'
import { useSettings } from 'contexts/Settings/Provider'
import small from './small.jpg'
import medium from './medium.jpg'
import large from './large.jpg'

export default function InterfaceContainer() {
  const { size, setSize } = useSettings()
  const options = {
    small: {
      label: 'Pequeno',
      bg: small.src
    },
    medium: {
      label: 'Médio',
      bg: medium.src
    },
    large: {
      label: 'Grande',
      bg: large.src
    }
  }

  function ItemContainer({ sizeOption }) {
    return (
      <Flex flexDirection="column" gap={2} align="center">
        <Flex
          border="2px solid"
          borderColor="gray.100"
          backgroundImage={options[sizeOption].bg}
          backgroundSize="cover"
          h="80px"
          w="80px"
          p={1}
          justify="flex-end"
          rounded="md"
          cursor="pointer"
          onClick={() => setSize(sizeOption)}
          _hover={{
            borderColor: `primary.500`
          }}
        >
          {size === sizeOption && (
            <Center bg="success" borderRadius="100px" h="20px" w="20px">
              <DoneCheck3 boxSize="4" color="white" />
            </Center>
          )}
        </Flex>
        <Text>{options[sizeOption].label}</Text>
      </Flex>
    )
  }

  return (
    <Box>
      <Heading mb={4}>Tamanho da interface</Heading>
      <Flex gap={8}>
        <ItemContainer sizeOption="small" />
        <ItemContainer sizeOption="medium" />
        <ItemContainer sizeOption="large" />
      </Flex>
    </Box>
  )
}
