import { Center } from 'components'

import ScaleFade from '.'

export default {
  component: ScaleFade,
  title: 'Transitions/ScaleFade/Default',
  args: {
    show: true,
    reverse: false,
    initialScale: 0.8
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
    reverse: {
      name: 'reverse',
      table: {
        type: {
          summary: 'boolean'
        }
      }
    },
    initialScale: {
      name: 'initialScale',
      table: {
        type: {
          summary: 'string'
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
  <ScaleFade {...args}>
    <Center p={4} bg="primary" width="150px" height="150px" color="light">
      ScaleFade
    </Center>
  </ScaleFade>
)
