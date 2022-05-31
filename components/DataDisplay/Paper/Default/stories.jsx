import { Text } from 'components'

import Paper from '.'

export default {
  component: Paper,
  title: 'DataDisplay/Paper/Default',
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
  <Paper {...args}>
    <Text>Paper</Text>
  </Paper>
)
