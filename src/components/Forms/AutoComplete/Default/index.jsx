import {
  forwardRef,
  cloneElement,
  memo,
  useMemo,
  useRef,
  useState
} from 'react'
import { useOutsideClick } from '@chakra-ui/react'

import { Input, InputRightElement, InputGroup, Box } from 'components'
import { useSizeValue, useHotKeyPressed } from 'hooks'
import { Arrow } from 'components/Icons/Interface'
import AutoCompleteGroup from './components/AutoCompleteGroup'

const AutoComplete = forwardRef(
  (
    {
      labelName = 'label',
      valueName = 'value',
      value = '',
      options = [],
      children,
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
        <InputGroup cursor="pointer" size={size}>
          <Input
            ref={ref}
            value={inputValue}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onClick={() => setIsOpen(true)}
            onChange={() => {}}
          />
          <InputRightElement>
            <Arrow />
          </InputRightElement>
        </InputGroup>

        <AutoCompleteGroup isOpen={isOpen}>
          {cloneElement(children)}
        </AutoCompleteGroup>
      </Box>
    )
  }
)

export default memo(AutoComplete)
