import { Text } from 'components'

import HiddenPermission from '.'

export default {
  component: HiddenPermission,
  title: 'Validation/HiddenPermission/Default',
  args: {
    userPermissions: ['teste'],
    necessaryPermissions: ['teste']
  },
  argTypes: {
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
    <HiddenPermission {...args}>
      <Text>
        Este componente vai ocultar o seu filho se o usuário não tiver as
        permissões necessárias
      </Text>
    </HiddenPermission>
  )
}
