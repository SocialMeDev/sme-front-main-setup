import { useForm } from 'react-hook-form'
import { Text, Box, FormLabel } from '@chakra-ui/react'

import DateInput from '.'

export default {
  component: DateInput,
  title: 'Atoms/DateInput/Basic/_1',
  args: {
    onChange: () => {},
    onBlur: () => {},
    name: 'name',
    ref: '2'
  },
  argTypes: {
    ref: {
      name: 'ref',
      table: {
        type: {
          summary: 'React ref'
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
    onBlur: {
      name: 'onBlur',
      table: {
        type: {
          summary: '(inputEVent) => void'
        }
      }
    },
    onChange: {
      name: 'onChange',
      table: {
        type: {
          summary: '(inputEVent) => void'
        }
      }
    }
  }
}

export const Common = (args) => {
  const { register, setValue, watch } = useForm({
    defaultValues: { input: args.value }
  })

  return (
    <Box>
      <FormLabel>DateInput</FormLabel>

      <DateInput
        {...args}
        maxW="300px"
        onSelectDate={(date) => setValue('input', date)}
        {...register('input')}
      />

      <Text mt={4}>Valor: {watch('input')}</Text>
    </Box>
  )
}
