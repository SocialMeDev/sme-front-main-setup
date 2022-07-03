import { FormControl, FormLabel } from 'components'

import NumberInput from '.'

export default {
  component: NumberInput,
  title: 'Forms/NumberInput/Default',
  args: {
    size: 'sm',
    min: 10,
    max: 20,
    defaultValue: 15,
    precision: 2
  },
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: { type: 'radio' },
      name: 'size',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    max: {
      name: 'max',
      table: {
        type: {
          summary: 'number'
        }
      }
    },
    min: {
      name: 'min',
      table: {
        type: {
          summary: 'number'
        }
      }
    },
    defaultValue: {
      name: 'defaultValue',
      table: {
        type: {
          summary: 'number'
        }
      }
    },
    precision: {
      name: 'precision',
      table: {
        type: {
          summary: 'number'
        }
      }
    }
  }
}

export const Default = (args) => {
  return (
    <FormControl>
      <FormLabel htmlFor="input">Input</FormLabel>
      <NumberInput {...args} />
    </FormControl>
  )
}
