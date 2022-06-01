import MenuItemDelete from '.'

import { Menu, MenuList, DotsButton } from 'components'

export default {
  component: MenuItemDelete,
  title: 'Recipe/MenuItem/Delete',
  args: {},
  argTypes: {}
}

export const Default = (args) => {
  return (
    <Menu>
      <DotsButton />
      <MenuList>
        <MenuItemDelete {...args}>Deletar</MenuItemDelete>
      </MenuList>
    </Menu>
  )
}
