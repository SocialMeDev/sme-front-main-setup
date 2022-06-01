import { useState } from 'react'

import { Text, Stack, CheckboxGroup } from 'components'
import CheckeboxItem from './components/CheckeboxItem'
import CustomCheckbox from '.'

export default {
  component: CustomCheckbox,
  title: 'Forms/Checkbox/Custom',
  args: {
    value: '1',
    size: 'md',
    defaultChecked: true,
    checked: true
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
  const [values, setValues] = useState(['2', '3'])
  return (
    <CheckboxGroup
      defaultValue={values}
      onChange={(values) => setValues(values)}
    >
      <Text>Valores: {values.join(', ')} </Text>

      <Stack>
        <CustomCheckbox {...args}>
          <CheckeboxItem
            title="Todas as permissões"
            description="Permissão para ler as permissões"
          />
        </CustomCheckbox>
        <CustomCheckbox {...args} value="2">
          <CheckeboxItem
            title="Todas as permissões 2"
            description="Permissão para ler as permissões 2"
          />
        </CustomCheckbox>
        <CustomCheckbox {...args} value="3">
          <CheckeboxItem
            title="Todas as permissões 3"
            description="Permissão para ler as permissões 3"
          />
        </CustomCheckbox>
      </Stack>
    </CheckboxGroup>
  )
}
