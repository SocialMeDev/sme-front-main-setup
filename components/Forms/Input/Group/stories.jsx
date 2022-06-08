import {
  FormControl,
  FormLabel,
  Input,
  InputLeftAddon,
  InputRightAddon
} from 'components'

import InputGroup from '.'

export default {
  component: InputGroup,
  title: 'Forms/Input/Group',
  args: {
    name: 'Nome',
    onChange: (event) => {
      console.log(`onChange`, event)
    }
  },
  argTypes: {
    name: {
      name: 'name',
      table: {
        type: {
          summary: 'string'
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
    }
  }
}

export const Group = (args) => {
  return (
    <FormControl>
      <FormLabel htmlFor="input">Input Group</FormLabel>

      <InputGroup {...args}>
        <InputLeftAddon>Right</InputLeftAddon>
        <Input id="input" />
        <InputRightAddon>Left</InputRightAddon>
      </InputGroup>
    </FormControl>
  )
}
