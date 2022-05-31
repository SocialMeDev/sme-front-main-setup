import { memo } from 'react'
import { FormItem, Input } from 'components'

function DynamicInput({
  htmlFor,
  helperText,
  label,
  onChange,
  error,
  ...rest
}) {
  return (
    <FormItem
      htmlFor={htmlFor}
      helperText={helperText}
      label={label}
      errors={error}
    >
      <Input
        onChange={({ target }) => onChange(target.value)}
        id={htmlFor}
        {...rest}
      />
    </FormItem>
  )
}

export default memo(DynamicInput)
