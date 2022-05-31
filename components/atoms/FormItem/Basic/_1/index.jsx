import { memo } from 'react'
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react'

function FormItem({ error, label, children, ...rest }) {
  return (
    <FormControl as="fieldset" mb="4" isInvalid={!!error} {...rest}>
      <FormLabel fontSize="sm">{label}</FormLabel>
      {children}
      <FormErrorMessage textAlign="left">{error?.message}</FormErrorMessage>
    </FormControl>
  )
}

export default memo(FormItem)
