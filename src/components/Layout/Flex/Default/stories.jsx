import { Text } from 'components'

import Flex from '.'

const alignsOptions = [
  'flex-start',
  'center',
  'space-around',
  'space-between',
  'flex-end'
]

export default {
  component: Flex,
  title: 'Layout/Flex/Default',
  args: {
    direction: 'row',
    gap: 0,
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
    gap: {
      name: 'gap',
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
    <Flex
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
    </Flex>
  )
}
