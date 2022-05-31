import { useForm } from 'react-hook-form'
import { Text, Box, FormLabel } from 'components'

import AutoComplete from '.'

export default {
  component: AutoComplete,
  title: 'Forms/AutoComplete/Default',
  args: {
    size: 'sm',
    valueName: 'code',
    labelName: 'name',
    value: '2'
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
    options: {
      table: {
        type: {
          summary: '[{ [string]: any, [string]: string }]'
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
    },
    onChange: {
      name: 'onChange',
      table: {
        type: {
          summary: '(optionValue) => void'
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
      <FormLabel>AutoComplete</FormLabel>

      <AutoComplete {...args} maxW="300px">
        <Text>Teste</Text>
      </AutoComplete>

      <Text mt={4}>Valores: {watch('AutoComplete')}</Text>
    </Box>
  )
}
