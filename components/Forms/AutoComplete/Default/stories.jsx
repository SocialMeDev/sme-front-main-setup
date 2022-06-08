import { useForm } from 'react-hook-form'
import { Text, Box } from 'components'

import AutoComplete from '.'

export default {
  component: AutoComplete,
  title: 'Forms/AutoComplete/Default',
  args: {
    size: 'sm',
    label: 'Frutas',
    name: 'fruits',
    valueName: 'code',
    labelName: 'name',
    value: '1'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      name: 'size',
      control: {
        type: 'radio'
      },
      table: {
        type: {
          summary: '["sm", "md", "lg"]'
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
    name: {
      name: 'name',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    valueName: {
      name: 'valueName',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    labelName: {
      name: 'labelName',
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
          summary: 'string'
        }
      }
    }
  }
}

export const Default = (args) => {
  const { watch } = useForm({
    defaultValues: {}
  })

  return (
    <Box>
      <AutoComplete {...args} maxW="300px">
        <Text>Item 1</Text>
        <Text>Item 2</Text>
        <Text>Item 3</Text>
      </AutoComplete>

      <Text mt={4}>Valores: {watch('AutoComplete')}</Text>
    </Box>
  )
}
