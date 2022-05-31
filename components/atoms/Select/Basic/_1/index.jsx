import { memo, useMemo, useRef, useState } from 'react'
import {
  Input,
  InputRightElement,
  InputGroup,
  VStack,
  Box,
  useOutsideClick
} from '@chakra-ui/react'

import { Arrow } from 'components/atoms/Icons/Interface'

import Option from './components/Option'

import usePressedKeyToTriggerAction from 'hooks/useHotKeyPressed'

const Select = ({
  labelName = 'label',
  valueName = 'value',
  onChange,
  value = '',
  options = [],
  size = 'sm',
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [focus, setFocus] = useState(false)

  const containerRef = useRef()

  usePressedKeyToTriggerAction('Space', () => {
    if (focus) setIsOpen(true)
  })

  useOutsideClick({
    ref: containerRef,
    handler: () => setIsOpen(false)
  })

  const inputValue = useMemo(() => {
    let labelBySelectedValue = ''

    options.forEach((option) => {
      if (value) {
        if (value.toString().includes(option[valueName])) {
          labelBySelectedValue = option[labelName]
        }
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
        <Input value={inputValue} onChange={() => {}} />
        <InputRightElement>
          <Arrow />
        </InputRightElement>
      </InputGroup>

      <Box
        display={isOpen ? 'block' : 'none'}
        p={2}
        mt={2}
        bg="containerBg"
        rounded="md"
        borderWidth="1px"
        borderColor="borderColor"
        minW="100%"
        maxH="300px"
        position="absolute"
        className="scrollbar-vertical"
        zIndex="1000"
      >
        <VStack align="flex-start">
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
        </VStack>
      </Box>
    </Box>
  )
}

export default memo(Select)
