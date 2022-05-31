import { Input } from 'components'

import FormItem from '.'

export default {
  component: FormItem,
  title: 'Forms/FormControl/Item',
  args: {
    isInvalid: true,
    isRequired: true,
    helperText: 'Texto de ajuda',
    label: 'Telephone'
  },
  argTypes: {
    htmlFor: {
      name: 'htmlFor',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    label: {
      name: 'label',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    helperText: {
      name: 'helperText',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    error: {
      name: 'error',
      table: {
        type: {
          summary: '{ [string]: string }'
        }
      }
    },
    isInvalid: {
      name: 'isInvalid',
      table: {
        type: {
          summary: 'boolean'
        }
      }
    },
    isRequired: {
      name: 'isRequired',
      table: {
        type: {
          summary: 'boolean'
        }
      }
    }
  }
}

export const Item = (args) => {
  return (
    <FormItem {...args}>
      <Input />
    </FormItem>
  )
}
