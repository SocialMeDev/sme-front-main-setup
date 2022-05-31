import MenuItemCustomFields from '.'

import { Menu, MenuList, DotsButton } from 'components'

export default {
  component: MenuItemCustomFields,
  title: 'Recipe/MenuItem/CustomFields',
  args: {},
  argTypes: {}
}

export const Default = (args) => {
  return (
    <Menu>
      <DotsButton />
      <MenuList>
        <MenuItemCustomFields {...args}>
          Campo personalizado
        </MenuItemCustomFields>
      </MenuList>
    </Menu>
  )
}
