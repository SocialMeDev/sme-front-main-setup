import { memo } from 'react'
import { MaskInput, FormItem } from 'components'

function DynamicMaskInput({
  htmlFor,
  helperText,
  label,
  mask,
  error,
  onChange,
  ...rest
}) {
  return (
    <FormItem
      htmlFor={htmlFor}
      helperText={helperText}
      label={label}
      errors={error}
    >
      <MaskInput
        onChange={({ target }) => onChange(target.value)}
        mask={mask}
        id={htmlFor}
        {...rest}
      />
    </FormItem>
  )
}

export default memo(DynamicMaskInput)
