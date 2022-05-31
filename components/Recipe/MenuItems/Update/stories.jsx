import MenuItemUpdate from '.'

import { Menu, MenuList, DotsButton } from 'components'

export default {
  component: MenuItemUpdate,
  title: 'Recipe/MenuItem/Update',
  args: {},
  argTypes: {}
}

export const Default = (args) => {
  return (
    <Menu>
      <DotsButton />
      <MenuList>
        <MenuItemUpdate {...args}>Editar</MenuItemUpdate>
      </MenuList>
    </Menu>
  )
}
