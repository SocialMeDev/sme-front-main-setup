import { memo, forwardRef } from 'react'
import { Input } from '@chakra-ui/react'

const MaskInput = forwardRef(
  ({ onChange, onBlur, name, mask, ...rest }, ref) => {
    return (
      <Input
        rounded="md"
        autoComplete="off"
        ref={ref}
        name={name}
        onBlur={onBlur}
        onChange={(event) => {
          event.target.value = mask(event.target.value)
          onChange(event)
        }}
        {...rest}
      />
    )
  }
)

export default memo(MaskInput)
