import { memo, useMemo } from 'react'

import { NativeSelect } from 'components'

function LimitSelect({ limit, onChangeLimit }) {
  const pageLimitsOptions = useMemo(() => {
    return [
      { value: 10, label: '10 / pagina' },
      { value: 20, label: '20 / pagina' },
      { value: 50, label: '50 / pagina' },
      { value: 100, label: '100 / pagina' }
    ]
  }, [])
  return (
    <NativeSelect
      maxW="200px"
      onChange={({ target }) => onChangeLimit(target.value)}
      defaultValue={limit}
      align="center"
      gap={1}
    >
      {pageLimitsOptions.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </NativeSelect>
  )
}

export default memo(LimitSelect)
