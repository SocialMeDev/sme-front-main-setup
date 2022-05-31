import { Center } from 'components'

import Collapse from '.'

export default {
  component: Collapse,
  title: 'Transitions/Collapse/Default',
  args: {
    show: true
  },
  argTypes: {
    show: {
      name: 'show',
      table: {
        type: {
          summary: 'boolean'
        }
      }
    },
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
  <Collapse {...args}>
    <Center p={4} bg="primary" width="150px" height="150px" color="light">
      Collapse
    </Center>
  </Collapse>
)
