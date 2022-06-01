import { memo, useMemo, useRef, useState } from 'react'
import {
  Collapse,
  CheckboxGroup,
  Checkbox,
  VStack,
  HStack,
  Text,
  Box,
  useOutsideClick
} from '@chakra-ui/react'

import { Arrow } from 'components/atoms/Icons/Interface'

import usePressedKeyToTriggerAction from 'hooks/useHotKeyPressed'

const MultipleSelect = ({
  labelName = 'label',
  valueName = 'value',
  onChange,
  values = [],
  options = [],
  size,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const containerRef = useRef()

  usePressedKeyToTriggerAction('Enter', () => {
    setIsOpen(false)
  })

  useOutsideClick({
    ref: containerRef,
    handler: () => setIsOpen(false)
  })

  const defaultSize = useMemo(() => {
    const possibleSizes = {
      sm: '8',
      md: '10',
      lg: '12'
    }

    return possibleSizes[size || 'sm']
  }, [size])

  const selectedOptionsLabel = useMemo(() => {
    const selecedLabelsByValue = []

    options.forEach((option) => {
      if (values.includes(option[valueName])) {
        selecedLabelsByValue.push(option[labelName])
      }
    })

    return selecedLabelsByValue.join(', ')
  }, [values])

  return (
    <Box
      w="100%"
      type="button"
      as="button"
      border="1px solid"
      borderColor="borderColor"
      ref={containerRef}
      onClick={() => setIsOpen(true)}
      {...rest}
    >
      <HStack justify="space-between" p={2} minH={defaultSize}>
        <Text fontSize={size}>{selectedOptionsLabel}</Text>
        <Arrow />
      </HStack>

      <Collapse in={isOpen} animateOpacity>
        <Box
          p={2}
          borderTop="1px solid"
          borderColor="borderColor"
          className="scrollbar-vertical"
        >
          <CheckboxGroup defaultValue={values} onChange={onChange}>
            <VStack align="flex-start">
              {options.map((option) => {
                const optionLabel = option[labelName]
                const optionValue = option[valueName]

                return (
                  <Checkbox size={size} key={optionLabel} value={optionValue}>
                    {optionLabel}
                  </Checkbox>
                )
              })}
            </VStack>
          </CheckboxGroup>
        </Box>
      </Collapse>
    </Box>
  )
}

export default memo(MultipleSelect)
