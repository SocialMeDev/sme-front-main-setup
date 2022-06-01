import { memo } from 'react'
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  FormHelperText
} from 'components'

function FormItem({
  error = {},
  helperText,
  htmlFor,
  label,
  children,
  ...rest
}) {
  return (
    <FormControl isInvalid={error.message} {...rest}>
      <FormLabel htmlFor={htmlFor}>{label}</FormLabel>
      {children}
      {error.message && <FormErrorMessage>{error.message}</FormErrorMessage>}
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
}

export default memo(FormItem)
