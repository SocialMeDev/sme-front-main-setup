import { FormControl, FormLabel } from 'components'

import Input from '.'

export default {
  component: Input,
  title: 'Forms/Input/Default',
  args: {
    type: 'text'
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
    onBlur: {
      name: 'onBlur',
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

export const Default = (args) => {
  return (
    <FormControl>
      <FormLabel htmlFor="input">Input</FormLabel>
      <Input id="input" maxW="300px" {...args} />
    </FormControl>
  )
}
