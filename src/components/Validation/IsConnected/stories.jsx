import { Text } from 'components'

import IsConnected from '.'

export default {
  component: IsConnected,
  title: 'Validation/IsConnected/Default',
  args: {
    redirect: '/',
    setLoading: () => {}
  },
  argTypes: {
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
    <IsConnected {...args}>
      <Text>
        Este componente vai renderizar seu filho apenas se o usuário estiver
        conectado
      </Text>
    </IsConnected>
  )
}
