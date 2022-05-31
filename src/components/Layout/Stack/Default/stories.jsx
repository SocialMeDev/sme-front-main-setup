import { Text } from 'components'

import Stack from '.'

const alignsOptions = [
  'flex-start',
  'center',
  'space-around',
  'space-between',
  'flex-end'
]

export default {
  component: Stack,
  title: 'Layout/Stack/Default',
  args: {
    direction: 'column',
    spacing: 2,
    align: 'flex-start',
    justify: 'flex-start'
  },
  argTypes: {
    direction: {
      options: ['column', 'row'],
      control: { type: 'radio' },
      name: 'direction',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    spacing: {
      name: 'spacing',
      table: {
        type: {
          summary: 'number'
        }
      }
    },
    align: {
      options: alignsOptions,
      control: { type: 'radio' },
      name: 'align',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    justify: {
      options: alignsOptions,
      control: { type: 'radio' },
      name: 'justify',
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
    <Stack
      minH="100px"
      w="75%"
      p={4}
      borderWidth="1px"
      borderColor="borderColor"
      rounded="md"
      {...args}
    >
      <Text>Wooooooooooohhhh</Text>
      <Text>aaaaaaaaaaah</Text>
      <Text>Woah!</Text>
    </Stack>
  )
}
