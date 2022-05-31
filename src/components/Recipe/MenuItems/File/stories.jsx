import MenuItemFiles from '.'

import { Menu, MenuList, DotsButton } from 'components'

export default {
  component: MenuItemFiles,
  title: 'Recipe/MenuItem/Files',
  args: {},
  argTypes: {}
}

export const Default = (args) => {
  return (
    <Menu>
      <DotsButton />
      <MenuList>
        <MenuItemFiles {...args}>Arquivos</MenuItemFiles>
      </MenuList>
    </Menu>
  )
}
