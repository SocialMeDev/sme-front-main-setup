import { useForm } from 'react-hook-form'
import { Text, Box, FormLabel } from '@chakra-ui/react'

import MultipleSelect from '.'

export default {
  component: MultipleSelect,
  title: 'Atoms/Select/Multiple/_1',
  args: {
    size: 'md',
    valueName: 'code',
    labelName: 'name',
    values: ['1', '2', '3', '4'],
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
      name: 'size',
      control: {
        options: ['sm', 'md', 'lg'],
        type: 'radio'
      },
      table: {
        type: {
          summary: 'size[]'
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
    values: {
      name: 'values',
      table: {
        type: {
          summary: 'string[]'
        }
      }
    },
    onChange: {
      table: {
        type: {
          summary: 'string[ ]'
        }
      }
    }
  }
}

export const Common = (args) => {
  const { setValue, watch } = useForm({
    defaultValues: { inputs: ['1', '2', '3', '4'] }
  })

  return (
    <Box>
      <FormLabel>Select</FormLabel>

      <MultipleSelect
        {...args}
        maxW="300px"
        values={watch('inputs')}
        onChange={(checkeds) => setValue('inputs', checkeds)}
      />

      <Text mt={4}>Valores: {watch('inputs').join(', ')}</Text>
    </Box>
  )
}
