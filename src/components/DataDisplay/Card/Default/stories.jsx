import { Text } from 'components'

import Card from '.'

export default {
  component: Card,
  title: 'DataDisplay/Card/Default',
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

export const Default = (args) => (
  <Card {...args}>
    <Text>Card</Text>
  </Card>
)
