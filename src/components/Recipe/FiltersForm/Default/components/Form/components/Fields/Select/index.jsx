import { memo } from 'react'
import { NativeSelect, FormItem } from 'components'

function DynamicSelect({
  error,
  htmlFor,
  label,
  value,
  helperText,
  onChange,
  options
  //...rest
}) {
  return (
    <FormItem
      htmlFor={htmlFor}
      helperText={helperText}
      label={label}
      errors={error}
    >
      <NativeSelect
        defaultValue={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </NativeSelect>
    </FormItem>
  )
}

export default memo(DynamicSelect)
