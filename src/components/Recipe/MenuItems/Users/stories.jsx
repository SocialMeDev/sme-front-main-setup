import MenuItemUsers from '.'

import { Menu, MenuList, DotsButton } from 'components'

export default {
  component: MenuItemUsers,
  title: 'Recipe/MenuItem/Users',
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
        <MenuItemUsers {...args}>Usuários</MenuItemUsers>
      </MenuList>
    </Menu>
  )
}
