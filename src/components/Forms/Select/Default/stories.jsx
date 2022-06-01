import { useForm } from 'react-hook-form'
import { Text, Box, FormLabel } from '@chakra-ui/react'

import Select from '.'

export default {
  component: Select,
  title: 'Forms/Select/Default',
  args: {
    size: 'sm',
    valueName: 'code',
    labelName: 'name',
    value: '2',
    options: [
      {
        name: 'Banana',
        code: '1'
      },
      {
        name: 'Maça',
        code: '2'
      },
      {
        name: 'Pera',
        code: '3'
      },
      {
        name: 'Maracuja',
        code: '4'
      },
      {
        name: 'Acerola',
        code: '5'
      },
      {
        name: 'Goiaba',
        code: '6'
      },
      {
        name: 'Tanjerina',
        code: '7'
      },
      {
        name: 'Limão',
        code: '8'
      }
    ]
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
  const { setValue, watch } = useForm({
    defaultValues: { select: args.value }
  })

  return (
    <Box>
      <FormLabel>Select</FormLabel>

      <Select
        {...args}
        maxW="300px"
        value={watch('select')}
        onChange={(value) => setValue('select', value)}
      />

      <Text mt={4}>Valores: {watch('select')}</Text>
    </Box>
  )
}
