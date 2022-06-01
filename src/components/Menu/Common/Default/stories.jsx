import {
  Button,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList
} from 'components'
import { Arrow } from 'components/Icons/Interface'
import Menu from '.'

export default {
  component: Menu,
  title: 'Menu/Common/Default',
  args: {
    boundary: 'clippingParents',
    strategy: 'absolute',
    lazyBehavior: 'unmount',
    isLazy: false,
    preventOverflow: false,
    flip: true,
    direction: 'ltr'
  },
  argTypes: {
    boundary: {
      options: ['clippingParents', 'scrollParent'],
      control: { type: 'radio' },
      name: 'boundary',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    strategy: {
      options: ['fixed', 'absolute'],
      control: { type: 'radio' },
      name: 'strategy',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    direction: {
      options: ['ltr', 'rtl'],
      control: { type: 'radio' },
      name: 'direction',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    lazyBehavior: {
      options: ['unmount', 'keepMounted'],
      control: { type: 'radio' },
      name: 'lazyBehavior',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    isLazy: {
      name: 'isLazy',
      table: {
        type: {
          summary: 'boolean'
        }
      }
    },
    flip: {
      name: 'flip',
      table: {
        type: {
          summary: 'boolean'
        }
      }
    },
    preventOverflow: {
      name: 'preventOverflow',
      table: {
        type: {
          summary: 'boolean'
        }
      }
    }
  }
}

export const Default = (args) => {
  return (
    <Menu {...args}>
      <MenuButton as={Button} rightIcon={<Arrow />}>
        Actions
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  )
}

export const Group = (args) => {
  return (
    <Menu {...args}>
      <MenuButton as={Button} variant="solid" colorScheme="blue">
        Usuário
      </MenuButton>
      <MenuList>
        <MenuGroup title="Perfil">
          <MenuItem>Minha conta</MenuItem>
          <MenuItem>Pagamentos</MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup title="Ajuda">
          <MenuItem>Documentações</MenuItem>
          <MenuItem>FAQ</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  )
}
