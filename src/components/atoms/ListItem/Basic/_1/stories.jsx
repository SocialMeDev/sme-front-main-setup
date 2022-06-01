import { Text, List } from '@chakra-ui/react'

import ListItem from '.'

export default {
  component: ListItem,
  title: 'Atoms/ListItem/Basic/_1',
  argTypes: {
    children: {
      name: 'children',
      table: {
        type: {
          summary: 'ReactElement'
        }
      }
    }
  }
}

export const Common = (args) => {
  return (
    <List
      borderWidth="1px"
      borderColor="borderColor"
      p={4}
      rounded="md"
      maxW="250px"
    >
      <ListItem {...args}>
        <Text fontSize="md">1° Item</Text>
      </ListItem>

      <ListItem {...args}>
        <Text fontSize="md">2° Item</Text>
      </ListItem>

      <ListItem {...args}>
        <Text fontSize="md">3° Item</Text>
      </ListItem>

      <ListItem {...args}>
        <Text fontSize="md">4° Item</Text>
      </ListItem>

      <ListItem {...args}>
        <Text fontSize="md">5° Item</Text>
      </ListItem>
    </List>
  )
}
