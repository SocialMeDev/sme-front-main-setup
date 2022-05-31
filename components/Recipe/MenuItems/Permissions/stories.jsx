import MenuItemPermissions from '.'

import { Menu, MenuList, DotsButton } from 'components'

export default {
  component: MenuItemPermissions,
  title: 'Recipe/MenuItem/Permissions',
  args: {
    isLoading: false,
    loadingText: 'Carregando...'
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
    loadingText: {
      name: 'loadingText',
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
    <Menu>
      <DotsButton />
      <MenuList>
        <MenuItemPermissions {...args}>Permissões</MenuItemPermissions>
      </MenuList>
    </Menu>
  )
}
