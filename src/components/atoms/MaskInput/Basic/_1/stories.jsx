import { Text, Box } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import { cpfMask } from 'utils/masks'

import MaskInput from '.'

export default {
  component: MaskInput,
  title: 'Atoms/MaskInput/Basic/_1',

  argTypes: {
    register: {
      name: 'register',
      table: {
        type: {
          summary: '{...register(key: string)}'
        }
      }
    },
    mask: {
      name: 'mask',
      table: {
        type: {
          summary: '(string) => string'
        }
      }
    }
  }
}
export const Common = (args) => {
  const { register, watch } = useForm({
    defaultValues: { input: '' }
  })

  return (
    <Box maxW="300px">
      <MaskInput {...args} {...register('input')} mask={cpfMask} />

      <Text mt="4" fontSize="lg">
        CPF: {watch('input')}
      </Text>
    </Box>
  )
}
