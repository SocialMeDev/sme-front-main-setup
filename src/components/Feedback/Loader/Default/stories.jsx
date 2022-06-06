import { Box, Text } from '@chakra-ui/react'

import Loader from '.'

export default {
  component: Loader,
  title: 'Feedback/Loader/Default',
  args: {
    text: 'Carregando...',
    height: '300px',
    isLoading: true
  },
  argTypes: {
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