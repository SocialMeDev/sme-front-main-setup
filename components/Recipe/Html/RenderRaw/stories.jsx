import Rotate from '.'

import { Text } from 'components'

export default {
  component: Rotate,
  title: 'Recipe/Animation/Rotate',
  args: {
    duration: '2s',
    timingFunction: 'infinite',
    delay: 'linear',
    direction: 'normal'
  },
  argTypes: {
    duration: {
      name: 'duration',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    timingFunction: {
      name: 'timingFunction',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    delay: {
      name: 'delay',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    direction: {
      name: 'direction',
      table: {
        type: {
          summary: 'string'
        }
      }
    }
  }
}

export const Default = (args) => {
  return (
    <Rotate {...args}>
      <Text>teste</Text>
    </Rotate>
  )
}
