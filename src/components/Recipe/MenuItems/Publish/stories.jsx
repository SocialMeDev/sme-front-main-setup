import MenuItemPublish from '.'

import { Menu, MenuList, DotsButton } from 'components'

export default {
  component: MenuItemPublish,
  title: 'Recipe/MenuItem/Publish',
  args: {
    isLoading: false,
    loadingText: 'Publicando...'
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
        <MenuItemPublish {...args}>Permissões</MenuItemPublish>
      </MenuList>
    </Menu>
  )
}
