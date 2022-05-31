import { SimpleGrid, VStack, Text, useColorModeValue } from '@chakra-ui/react'

import Icons from '.'

export default {
  component: Icons,
  title: 'Atoms/Icons/SocialMedia/_1',
  argTypes: {
    boxSize: {
      name: 'boxSize',
      defaultValue: '6',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    color: {
      name: 'color',
      defaultValue: 'inherit',
      table: {
        type: {
          summary: 'string'
        }
      }
    }
  }
}

export const Common = () => {
  return (
    <SimpleGrid columns={[3, 4, 5]}>
      {Object.entries(Icons).map(([name, Icon]) => (
        <VStack
          p={2}
          borderWidth="1px"
          borderColor={useColorModeValue('gray.200', 'gray.600')}
          key={name}
        >
          <Icon />
          <Text>{name}</Text>
        </VStack>
      ))}
    </SimpleGrid>
  )
}
