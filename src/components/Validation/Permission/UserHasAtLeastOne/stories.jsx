import { Text } from 'components'

import UserHasAtLeastOnePermission from '.'

export default {
  component: UserHasAtLeastOnePermission,
  title: 'Validation/UserHasAtLeastOnePermission/Default',
  args: {
    redirect: '/',
    userPermissions: ['teste']
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
    }
  }
}

export const Default = (args) => {
  return (
    <UserHasAtLeastOnePermission {...args}>
      <Text>
        Este componente vai redirecionar o usuário caso não tenha nenhuma
        permissão
      </Text>
    </UserHasAtLeastOnePermission>
  )
}
