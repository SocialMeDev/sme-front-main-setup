import { Text } from 'components'

import Authentication from '.'

export default {
  component: Authentication,
  title: 'Validation/Authentication/Default',
  args: {
    shouldBeDisconnect: false,
    redirect: '/',
    loading: true,
    setLoading: () => {}
  },
  argTypes: {
    loading: {
      name: 'loading',
      table: {
        type: {
          summary: 'boolean'
        }
      }
    },
    shouldBeDisconnect: {
      name: 'shouldBeDisconnect',
      table: {
        type: {
          summary: 'boolean'
        }
      }
    },
    redirect: {
      name: 'redirect',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    setLoading: {
      name: 'setLoading',
      table: {
        type: {
          summary: '(boolean) => void'
        }
      }
    }
  }
}

export const Default = (args) => {
  return (
    <Authentication {...args}>
      {args.loading ? (
        <Text>Carregando...</Text>
      ) : (
        <Text>Você está desconectado</Text>
      )}
    </Authentication>
  )
}
