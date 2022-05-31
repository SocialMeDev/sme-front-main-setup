import { Stack, Checkbox } from 'components'

import CheckboxGroup from '.'

export default {
  component: CheckboxGroup,
  title: 'Forms/Checkbox/Group',
  args: {
    defaultValue: ['1', '2'],
    colorScheme: 'primary',
    size: 'md'
  },
  argTypes: {
    defaultValue: {
      name: 'defaultValue',
      table: {
        type: {
          summary: 'string[]'
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
    onChange: {
      name: 'onChange',
      table: {
        type: {
          summary: '(checkedValues) => void'
        }
      }
    }
  }
}

export const Group = (args) => {
  return (
    <CheckboxGroup {...args}>
      <Stack>
        <Checkbox value="1">Checkbox 1</Checkbox>
        <Checkbox value="2">Checkbox 2</Checkbox>
        <Checkbox value="3">Checkbox 3</Checkbox>
      </Stack>
    </CheckboxGroup>
  )
}
