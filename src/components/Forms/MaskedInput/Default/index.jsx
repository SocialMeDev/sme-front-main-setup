import MaskedInput from 'react-input-mask'
import { memo, forwardRef } from 'react'

import { Input } from 'components'

const CustomMaskInput = forwardRef(({ mask, onChange, name, ...rest }, ref) => {
  return (
    <MaskedInput
      ref={ref}
      name={name}
      mask={mask}
      //maskPlaceholder={'_'}
      alwaysShowMask
      onChange={(e) => {
        e.persist()
        onChange(e.target.value)
      }}
      {...rest}
    >
      {(inputProps) => <Input {...inputProps} type="text" />}
    </MaskedInput>
  )
})

export default memo(CustomMaskInput)
