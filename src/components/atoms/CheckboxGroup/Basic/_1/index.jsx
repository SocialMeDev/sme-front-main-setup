import { memo, Fragment, cloneElement, useRef, useEffect } from 'react'
import {
  Box,
  useCheckbox,
  useCheckboxGroup,
  Stack,
  Input,
  chakra
} from '@chakra-ui/react'

function Checkbox({ children, ...rest }) {
  const labelRef = useRef()

  const { state, getInputProps } = useCheckbox(rest)

  const { isChecked } = state

  return (
    <>
      <chakra.label ref={labelRef} display="none">
        <Input {...getInputProps()} hidden />
      </chakra.label>

      <Stack as="button" onClick={() => labelRef.current.click()}>
        <Box w="100%">{cloneElement(children, { isChecked })}</Box>
      </Stack>
    </>
  )
}

function CustomCheckbox({
  children,
  valueName = 'value',
  defaultValue = [],
  onChange,
  options = []
}) {
  const { value, getCheckboxProps } = useCheckboxGroup({
    defaultValue
  })

  useEffect(() => {
    onChange(value)
  }, [value])

  return (
    <Fragment>
      {options.map((option) => (
        <Checkbox
          key={option[valueName]}
          {...getCheckboxProps({ value: option[valueName] })}
        >
          {cloneElement(children, { ...option })}
        </Checkbox>
      ))}
    </Fragment>
  )
}

export default memo(CustomCheckbox)
