import { FormLabel, FormErrorMessage, FormHelperText, Input } from 'components'

import FormControl from '.'

export default {
  component: FormControl,
  title: 'Forms/FormControl/Default',
  args: {
    isInvalid: true,
    isRequired: true
  },
  argTypes: {
    isInvalid: {
      name: 'isInvalid',
      table: {
        type: {
          summary: 'boolean'
        }
      }
    },
    isRequired: {
      name: 'isRequired',
      table: {
        type: {
          summary: 'boolean'
        }
      }
    }
  }
}

export const Default = (args) => {
  return (
    <FormControl {...args} isInvalid={false}>
      <FormLabel htmlFor="email">Email</FormLabel>
      <Input id="email" type="email" />
      <FormHelperText>Texto de aviso</FormHelperText>
    </FormControl>
  )
}

export const Error = (args) => {
  return (
    <FormControl {...args}>
      <FormLabel htmlFor="phone">Telefone</FormLabel>
      <Input id="phone" type="phone" />
      <FormErrorMessage>Este telefone está errado!</FormErrorMessage>
      <FormHelperText>Sem o DDD por favor</FormHelperText>
    </FormControl>
  )
}
