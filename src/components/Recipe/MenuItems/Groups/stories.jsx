import MenuItemGroups from '.'

import { Menu, MenuList, DotsButton } from 'components'

export default {
  component: MenuItemGroups,
  title: 'Recipe/MenuItem/Groups',
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
        <MenuItemGroups {...args}>Grupos</MenuItemGroups>
      </MenuList>
    </Menu>
  )
}
