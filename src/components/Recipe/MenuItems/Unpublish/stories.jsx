import MenuItemUnpublish from '.'

import { Menu, MenuList, DotsButton } from 'components'

export default {
  component: MenuItemUnpublish,
  title: 'Recipe/MenuItem/Unpublish',
  args: {
    isLoading: false,
    loadingText: 'Despublicando...'
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
        <MenuItemUnpublish {...args}>Permissões</MenuItemUnpublish>
      </MenuList>
    </Menu>
  )
}
