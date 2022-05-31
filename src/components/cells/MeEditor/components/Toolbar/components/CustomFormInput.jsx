import { forwardRef, memo } from 'react'
import { FormControl, FormLabel, Input } from '@chakra-ui/react'

const FormInput = forwardRef(({ maxW, label, ...rest }, ref) => {
  return (
    <FormControl maxW={maxW} as="fieldset">
      <FormLabel fontSize="sm">{label}</FormLabel>
      <Input maxW={maxW} ref={ref} autoComplete="off" {...rest} />
    </FormControl>
  )
})

export default memo(FormInput)
