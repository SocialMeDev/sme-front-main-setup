import { memo, forwardRef, useState } from 'react'
import { Input, InputGroup, InputRightElement } from 'components'

import { Eye5, EyeHidden } from 'components/Icons/Interface'

const PasswordInput = forwardRef(({ onChange, onBlur, name, ...rest }, ref) => {
  const [show, setShow] = useState(false)

  return (
    <InputGroup>
      <Input
        autoComplete="current-password"
        name={name}
        ref={ref}
        onBlur={onBlur}
        onChange={onChange}
        type={`${show ? 'text' : 'password'}`}
        {...rest}
      />

      <InputRightElement
        cursor="pointer"
        sx={{ svg: { transition: 'all 0.4s' } }}
        _hover={{ svg: { color: 'primary' } }}
      >
        {show ? (
          <EyeHidden aria-label="Oculta senha" onClick={() => setShow(false)} />
        ) : (
          <Eye5 aria-label="Mostrar senha" onClick={() => setShow(true)} />
        )}
      </InputRightElement>
    </InputGroup>
  )
})

export default memo(PasswordInput)
