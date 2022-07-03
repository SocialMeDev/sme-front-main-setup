import { memo, forwardRef } from 'react'
import { Input } from 'components'

const MaskInput = forwardRef(
  ({ onChange, onBlur, name, mask, ...rest }, ref) => {
    return (
      <Input
        {...rest}
        ref={ref}
        name={name}
        onBlur={onBlur}
        onChange={(event) => {
          event.target.value = mask(event.target.value)
          onChange(event)
        }}
      />
    )
  }
)

export default memo(MaskInput)
