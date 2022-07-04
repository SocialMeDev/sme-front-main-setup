import { Box, Flex, Heading, Text, Center } from 'components'
import { DoneCheck3 } from 'components/Icons/Interface'
import { useSettings } from 'contexts/Settings/Provider'
import light from './light.jpg'
import dark from './dark.jpg'

export default function ThemeContainer() {
  const { theme, setTheme } = useSettings()

  const options = {
    light: {
      label: 'Claro',
      bg: light.src
    },
    dark: {
      label: 'Escuro',
      bg: dark.src
    }
  }

  function ItemContainer({ themeOption }) {
    return (
      <Flex flexDirection="column" gap={2} align="center">
        <Flex
          border="2px solid"
          borderColor="gray.100"
          backgroundImage={options[themeOption].bg}
          backgroundSize="cover"
          h="80px"
          w="80px"
          p={1}
          justify="flex-end"
          rounded="md"
          cursor="pointer"
          onClick={() => setTheme(themeOption)}
          _hover={{
            borderColor: `primary.500`
          }}
        >
          {theme === themeOption && (
            <Center bg="success" borderRadius="100px" h="20px" w="20px">
              <DoneCheck3 boxSize="4" color="white" />
            </Center>
          )}
        </Flex>
        <Text>{options[themeOption].label}</Text>
      </Flex>
    )
  }

  return (
    <Box>
      <Heading mb={4}>Esquema de cores</Heading>
      <Flex gap={8}>
        <ItemContainer themeOption="light" />
        <ItemContainer themeOption="dark" />
      </Flex>
    </Box>
  )
}
