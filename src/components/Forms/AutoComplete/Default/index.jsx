import {
  Children,
  cloneElement,
  memo,
  useEffect,
  useCallback,
  useRef,
  useState
} from 'react'
import { useOutsideClick } from '@chakra-ui/react'

import {
  FocusableBox,
  FormLabel,
  Input,
  InputRightElement,
  InputGroup,
  Box
} from 'components'
import { useSizeValue, useHotKeyPressed } from 'hooks'
import { Arrow } from 'components/Icons/Interface'
import AutoCompleteGroup from './components/AutoCompleteGroup'

const AutoComplete = ({
  name = 'complete',
  label = 'AutoComplete',
  value = '',
  children,
  size = useSizeValue('xs', 'sm', 'md'),
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const containerRef = useRef()
  const inputRef = useRef()

  useHotKeyPressed('Space', () => {
    if (inputRef.current === document.activeElement) setIsOpen(true)
  })

  useOutsideClick({
    ref: containerRef,
    handler: () => setIsOpen(false)
  })

  useEffect(() => {
    if (inputRef.current) inputRef.current.value = value
  }, [value])

  const onSelect = useCallback((value) => {}, [])

  return (
    <Box position="relative" ref={containerRef} {...rest}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <InputGroup size={size}>
        <Input
          id={name}
          ref={inputRef}
          onClick={() => setIsOpen(true)}
          onChange={() => {}}
        />
        <InputRightElement>
          <Arrow />
        </InputRightElement>
      </InputGroup>

      <AutoCompleteGroup isOpen={isOpen}>
        {Children.map(children, (child) => {
          return cloneElement(<FocusableBox p={1}>{child}</FocusableBox>, {
            value,
            onSelect
          })
        })}
      </AutoCompleteGroup>
    </Box>
  )
}

export default memo(AutoComplete)
