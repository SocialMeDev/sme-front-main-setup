import { Stack } from 'components'
import Checkbox from '.'

export default {
  component: Checkbox,
  title: 'Forms/Checkbox/Default',
  args: {
    value: '1',
    size: 'md',
    colorScheme: 'primary',
    defaultChecked: true,
    checked: true
  },
  argTypes: {
    colorScheme: {
      name: 'colorScheme',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
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
    name: {
      name: 'name',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    value: {
      name: 'value',
      table: {
        type: {
          summary: 'StringOrNumber'
        }
      }
    },
    onChange: {
      name: 'onChange',
      table: {
        type: {
          summary: '(checkedValue) => void'
        }
      }
    },
    defaultChecked: {
      name: 'defaultChecked',
      table: {
        type: {
          summary: 'boolean'
        }
      }
    },
    checked: {
      name: 'checked',
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
    <Stack>
      <Checkbox {...args}>Checkbox </Checkbox>
      <Checkbox isDisabled={true} {...args}>
        Checkbox disabilitado
      </Checkbox>
      <Checkbox isChecked={false} {...args}>
        Checkbox sempre inativo
      </Checkbox>
    </Stack>
  )
}
