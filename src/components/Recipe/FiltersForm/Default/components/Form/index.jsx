import { memo, Fragment, useCallback } from 'react'

import { Box } from 'components'

import FilterInput from './components/Fields/Input'
import FilterMaskInput from './components/Fields/MaskInput'
import FilterSelect from './components/Fields/Select'

function FilterForm({ fields = [], values, setValues }) {
  const changeFilters = useCallback((name, value) => {
    setValues((oldFilter) => {
      return { ...oldFilter, [name]: value }
    })
  }, [])

  const renderFormField = useCallback((type, { name, ...rest }) => {
    const onChange = (value) => {
      changeFilters(name, value)
    }

    const fields = {
      select: <FilterSelect onChange={onChange} {...rest} />,
      input: <FilterInput onChange={onChange} {...rest} />,
      maskInput: <FilterMaskInput onChange={onChange} {...rest} />
    }

    return fields[type]
  }, [])

  return (
    <Fragment>
      {fields.map(({ type, ...rest }) => {
        rest.value = values[rest.name]

        return <Box key={rest.name}>{renderFormField(type, { ...rest })}</Box>
      })}
    </Fragment>
  )
}

export default memo(FilterForm)
