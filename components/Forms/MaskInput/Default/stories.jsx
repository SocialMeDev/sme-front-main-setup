import { useForm } from 'react-hook-form'

import { cpfMask } from 'utils/masks'
import { FormItem } from 'components'

import MaskInput from '.'

export default {
  component: MaskInput,
  title: 'Forms/MaskInput/Default',
  args: {
    type: 'text',
    mask: cpfMask
  },
  argTypes: {
    name: {
      name: 'name',
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
          summary: '(event: HTMLInputElement) => void'
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
export const Default = (args) => {
  const { register } = useForm({
    defaultValues: { input: '' }
  })

  return (
    <FormItem label="CPF" helperText="Há uma máscara nesse CPF" maxW="300px">
      <MaskInput {...args} {...register('input')} />
    </FormItem>
  )
}
