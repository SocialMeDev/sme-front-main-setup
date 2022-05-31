import { Stack, Radio } from 'components'

import RadioGroup from '.'

export default {
  component: RadioGroup,
  title: 'Forms/Radio/Group',
  args: {
    defaultValue: '2',
    size: 'md'
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
    name: {
      name: 'name',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    defaultValue: {
      name: 'defaultValue',
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
          summary: '(selectedValue) => void'
        }
      }
    }
  }
}

export const Group = (args) => {
  return (
    <RadioGroup {...args}>
      <Stack>
        <Radio value="1">Radio 1</Radio>
        <Radio value="2">Radio 2</Radio>
        <Radio value="3">Radio 3</Radio>
      </Stack>
    </RadioGroup>
  )
}
