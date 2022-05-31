import { forwardRef, memo } from 'react'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { Search1 } from 'components/atoms/Icons/Interface'

import useDebounce from 'hooks/useDebounce'

const SearchInput = forwardRef(({ onChange, onBlur, name, ...rest }, ref) => {
  const { query } = useRouter()

  const handleOnChangeDebounce = useDebounce((event) => {
    onChange(event)
  })

  return (
    <InputGroup as="fieldset" {...rest}>
      <InputLeftElement>
        <Search1 transition="all 0.4s" color="borderColor" />
      </InputLeftElement>
      <Input
        bg="containerBg"
        ref={ref}
        name={name}
        onBlur={onBlur}
        onChange={handleOnChangeDebounce}
        defaultValue={query[name] || ''}
        rounded="md"
        autoComplete="off"
        placeholder="Pesquisar"
      />
    </InputGroup>
  )
})

export default memo(SearchInput)
