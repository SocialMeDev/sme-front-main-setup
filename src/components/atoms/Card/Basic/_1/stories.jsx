import { Text } from '@chakra-ui/react'

import Card from '.'

export default {
  component: Card,
  title: 'Atoms/Card/Basic/_1',
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

export const Common = (args) => (
  <Card bg="blue.500" {...args}>
    <Text color="lightColor">Card</Text>
  </Card>
)
