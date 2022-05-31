import MenuItemDetails from '.'

import { Menu, MenuList, DotsButton } from 'components'

export default {
  component: MenuItemDetails,
  title: 'Recipe/MenuItem/Details',
  args: {},
  argTypes: {}
}

export const Default = (args) => {
  return (
    <Menu>
      <DotsButton />
      <MenuList>
        <MenuItemDetails {...args}>Mais informações</MenuItemDetails>
      </MenuList>
    </Menu>
  )
}
