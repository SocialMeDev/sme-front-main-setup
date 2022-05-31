import { Input, InputLeftAddon, InputRightAddon } from 'components'

import InputGroup from '.'

export default {
  component: InputGroup,
  title: 'Forms/Input/Group',

  argTypes: {
    name: {
      name: 'name',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    onBlur: {
      name: 'onBlur',
      table: {
        type: {
          summary: '(event: HTMLInputElement) => void'
        }
      }
    },
    onFocus: {
      name: 'onFocus',
      table: {
        type: {
          summary: '(event: HTMLInputElement) => void'
        }
      }
    },
    onChange: {
      name: 'onChange',
      table: {
        type: {
          summary: '(event: HTMLInputElement) => void'
        }
      }
    },
    type: {
      name: 'type',
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
    <InputGroup {...args}>
      <InputLeftAddon>Right</InputLeftAddon>
      <Input />
      <InputRightAddon>Left</InputRightAddon>
    </InputGroup>
  )
}
