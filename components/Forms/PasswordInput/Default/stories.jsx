import { useForm } from 'react-hook-form'

import { FormItem } from 'components'
import PasswordInput from '.'

export default {
  component: PasswordInput,
  title: 'Forms/PasswordInput/Default',
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
    }
  }
}

export const Default = (args) => {
  const { register } = useForm({
    defaultValues: { input: '' }
  })

  return (
    <FormItem label="Senha" helperText="Cuidado com sua senha" maxW="250px">
      <PasswordInput {...args} {...register('input')} />
    </FormItem>
  )
}
