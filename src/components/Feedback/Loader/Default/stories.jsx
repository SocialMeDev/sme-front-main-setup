import { Box, Text } from '@chakra-ui/react'

import Loader from '.'

export default {
  component: Loader,
  title: 'Feedback/Loader/Default',
  args: {
    color: 'primary',
    direction: 'row',
    text: 'Carregando...',
    height: '300px',
    isLoading: true
  },
  argTypes: {
    direction: {
      options: ['row', 'column'],
      control: { type: 'radio' },
      name: 'direction',
      table: {
        type: {
          summary: ' "row" | "column" '
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
    isLoading: {
      name: 'isLoading',
      table: {
        type: {
          summary: 'boolean'
        }
      }
    },
    text: {
      name: 'text',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    height: {
      name: 'height',
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
    <Box>
      {args.isLoading ? <Loader {...args} /> : <Text>Acabou de carregar</Text>}
    </Box>
  )
}
