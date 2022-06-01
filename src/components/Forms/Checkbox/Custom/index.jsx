import {
  memo,
  cloneElement,
  useEffect,
  useState,
  useCallback,
  useRef
} from 'react'
import { Flex, Checkbox } from 'components'

import { useSizeValue } from 'hooks'

const CheckboxDefault = ({
  children,
  size = useSizeValue('sm', 'md', 'lg'),
  value,
  ...rest
}) => {
  const [isChecked, setIsChecked] = useState(false)

  const checkboxRef = useRef()

  const onChange = useCallback(() => {
    checkboxRef.current.click()
    setIsChecked(checkboxRef.current.checked)
  }, [])

  useEffect(() => {
    setIsChecked(checkboxRef?.current?.checked)
  }, [checkboxRef.current])

  return (
    <>
      <Checkbox hidden ref={checkboxRef} size={size} value={value} />

      <Flex cursor="pointer" w="max-content" onClick={onChange} {...rest}>
        {cloneElement(children, { isChecked })}
      </Flex>
    </>
  )
}

export default memo(CheckboxDefault)
