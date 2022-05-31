import { memo, forwardRef, useState } from 'react'
import {
  Input,
  InputGroup,
  InputRightElement,
  useColorModeValue,
  useBreakpointValue
} from '@chakra-ui/react'

import { Eye5, EyeHidden } from 'components/atoms/Icons/Interface'

const PasswordInput = forwardRef(
  ({ onChange, onBlur, name, autoFocus, size, ...rest }, ref) => {
    const color = useColorModeValue('primary.400', 'primary.200')

    const defaultSize = useBreakpointValue({ base: 'md', sm: 'sm' })

    const [show, setShow] = useState(false)

    return (
      <InputGroup as="fieldset" size={size || defaultSize}>
        <Input
          rounded="md"
          autoFocus={autoFocus}
          name={name}
          ref={ref}
          onBlur={onBlur}
          onChange={onChange}
          autoComplete="off"
          type={`${show ? 'text' : 'password'}`}
          {...rest}
        />

        <InputRightElement
          cursor="pointer"
          _hover={{ svg: { transition: 'all 0.4s', color } }}
        >
          {show ? (
            <EyeHidden size={20} onClick={() => setShow(false)} />
          ) : (
            <Eye5 size={20} onClick={() => setShow(true)} />
          )}
        </InputRightElement>
      </InputGroup>
    )
  }
)

export default memo(PasswordInput)
