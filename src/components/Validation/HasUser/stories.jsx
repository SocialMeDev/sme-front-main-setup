import { Text } from 'components'

import HasUser from '.'

export default {
  component: HasUser,
  title: 'Validation/HasUser/Default',
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
    <HasUser {...args}>
      <Text>
        Este componente vai renderizar seu filho se estiver um usuário, seja
        conectado ou não
      </Text>
    </HasUser>
  )
}
