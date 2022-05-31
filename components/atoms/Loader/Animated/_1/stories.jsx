import { Box, Text } from '@chakra-ui/react'

import WifiLoader from '.'

export default {
  component: WifiLoader,
  title: 'Atoms/Loader/Animated/_1',
  args: {
    text: 'Carregando...',
    height: '300px',
    primaryColor: 'blue.500',
    secondaryColor: 'blue.200',
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
    },
    primaryColor: {
      name: 'primaryColor',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    secondaryColor: {
      name: 'secondaryColor',
      table: {
        type: {
          summary: 'string'
        }
      }
    }
  }
}

export const Common = (args) => {
  return (
    <Box>
      {args.isLoading ? (
        <WifiLoader {...args} />
      ) : (
        <Text>Acabou de carregar</Text>
      )}
    </Box>
  )
}
