import { memo, useRef } from 'react'
import { Input, InputGroup, InputRightElement, IconButton } from 'components'

import { Search1 } from 'components/Icons/Interface'

const SearchInput = ({ onSearch, size, width, ...rest }) => {
  const inputRef = useRef({})

  return (
    <InputGroup size={size} width={width}>
      <Input
        ref={inputRef}
        bg="bgContent"
        rounded="md"
        autoComplete="off"
        {...rest}
      />
      <InputRightElement>
        <IconButton
          roundedTopLeft="none"
          roundedBottomLeft="none"
          size={size}
          onClick={() => onSearch(inputRef?.current?.value || '')}
          variant="solid"
          icon={<Search1 size={size} />}
        />
      </InputRightElement>
    </InputGroup>
  )
}

export default memo(SearchInput)
