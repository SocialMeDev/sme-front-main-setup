import { Button } from 'components'

import ButtonGroup from '.'

export default {
  component: ButtonGroup,
  title: 'Forms/Button/Group',
  args: {
    isAttached: true,
    size: 'sm',
    variant: 'solid',
    colorScheme: 'primary'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
      name: 'size',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    isAttached: {
      name: 'isAttached',
      table: {
        type: {
          summary: 'boolean'
        }
      }
    },
    colorScheme: {
      name: 'colorScheme',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    variant: {
      options: ['solid', 'outline', 'ghost'],
      control: { type: 'radio' },
      name: 'variant',
      table: {
        type: {
          summary: 'string'
        }
      }
    }
  }
}

export const Group = (args) => {
  return (
    <ButtonGroup {...args}>
      <Button>Inativo</Button>
      <Button>Ativo</Button>
    </ButtonGroup>
  )
}
