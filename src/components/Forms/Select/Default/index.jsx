import { forwardRef, memo, useMemo, useRef, useState } from 'react'
import { useOutsideClick } from '@chakra-ui/react'

import {
  ScrollView,
  Input,
  InputRightElement,
  InputGroup,
  Stack,
  Box
} from 'components'
import { useSizeValue, useHotKeyPressed } from 'hooks'
import { Arrow } from 'components/Icons/Interface'
import Option from './components/Option'

const Select = forwardRef(
  (
    {
      labelName = 'label',
      valueName = 'value',
      onChange,
      value = '',
      options = [],
      size = useSizeValue('xs', 'sm', 'md'),
      ...rest
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false)
    const [focus, setFocus] = useState(false)

    const containerRef = useRef()

    useHotKeyPressed('Space', () => {
      if (focus) setIsOpen(true)
    })

    useOutsideClick({
      ref: containerRef,
      handler: () => setIsOpen(false)
    })

    const inputValue = useMemo(() => {
      let labelBySelectedValue = ''

      options.forEach((option) => {
        if (value.toString().includes(option[valueName])) {
          labelBySelectedValue = option[labelName]
        }
      })

      return labelBySelectedValue
    }, [value])

    return (
      <Box position="relative" ref={containerRef} {...rest}>
        <InputGroup
          cursor="pointer"
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onClick={() => setIsOpen(true)}
          size={size}
        >
          <Input ref={ref} value={inputValue} onChange={() => {}} />
          <InputRightElement>
            <Arrow />
          </InputRightElement>
        </InputGroup>

        <ScrollView
          display={isOpen ? 'block' : 'none'}
          p={2}
          mt={1}
          bg="light"
          rounded="md"
          borderWidth="1px"
          borderColor="borderColor"
          minW="100%"
          height="auto"
          maxHeight="200px"
          position="absolute"
          zIndex="1000"
        >
          <Stack spacing={1}>
            {options.map((option, index) => {
              const optionLabel = option[labelName]
              const optionValue = option[valueName]

              return (
                <Option
                  size={size}
                  key={index}
                  label={optionLabel}
                  value={optionValue}
                  onClick={() => {
                    onChange(optionValue)
                    setIsOpen(false)
                  }}
                />
              )
            })}
          </Stack>
        </ScrollView>
      </Box>
    )
  }
)

export default memo(Select)
