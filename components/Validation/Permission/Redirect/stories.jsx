import { Text } from 'components'

import RedirectPermission from '.'

export default {
  component: RedirectPermission,
  title: 'Validation/RedirectPermission/Default',
  args: {
    redirect: '/',
    userPermissions: ['teste'],
    necessaryPermissions: ['teste']
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
    userPermissions: {
      name: 'userPermissions',
      table: {
        type: {
          summary: 'string[]'
        }
      }
    },
    necessaryPermissions: {
      name: 'necessaryPermissions',
      table: {
        type: {
          summary: 'string[]'
        }
      }
    }
  }
}

export const Default = (args) => {
  return (
    <RedirectPermission {...args}>
      <Text>
        Este componente vai redirecionar o usuário caso não tenha as permissões
        necessárias
      </Text>
    </RedirectPermission>
  )
}
