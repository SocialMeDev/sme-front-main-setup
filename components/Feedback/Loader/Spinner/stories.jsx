import Spinner from '.'

import { Center } from 'components'

export default {
  component: Spinner,
  title: 'Feedback/Spinner/Default',
  args: {
    thickness: '0.2rem',
    speed: '0.65s',
    emptyColor: 'gray.100',
    color: 'primary',
    size: 'lg'
  },
  argTypes: {
    thickness: {
      name: 'thickness',
      table: {
        type: {
          summary: 'boolean'
        }
      }
    },
    speed: {
      name: 'speed',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    emptyColor: {
      name: 'emptyColor',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    color: {
      name: 'color',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      name: 'size',
      control: { type: 'radio' },
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
    <Center height="100vh">
      <Spinner {...args} />
    </Center>
  )
}
