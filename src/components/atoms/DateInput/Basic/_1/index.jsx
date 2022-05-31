import { forwardRef, memo, useRef, useState } from 'react'
import { Input, Box, useOutsideClick } from '@chakra-ui/react'

import { Calendar } from 'components/atoms/Calendar/Basic'
import { brazilianDateMask } from 'utils/masks'
import usePressedKeyToTriggerAction from 'hooks/useHotKeyPressed'

const DateInput = forwardRef(
  ({ onSelectDate, onChange, onBlur, name, ...rest }, ref) => {
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

    return (
      <Box position="relative" ref={containerRef} {...rest}>
        <Input
          id={name}
          name={name}
          ref={ref}
          onChange={(event) => {
            event.target.value = brazilianDateMask(event.target.value)
            onChange(event)
          }}
          onFocus={() => {
            setFocus(true)
            setIsOpen(true)
          }}
          onBlur={(event) => {
            onBlur(event)
            setFocus(false)
          }}
          {...rest}
        />

        <Box
          display={isOpen ? 'block' : 'none'}
          p={2}
          mt={2}
          bg="containerBg"
          rounded="md"
          borderWidth="1px"
          borderColor="borderColor"
          minW="100%"
          position="absolute"
          className="scrollbar-vertical"
          zIndex="1000"
        >
          <Calendar
            onSelectDate={(date) => {
              if (onSelectDate) onSelectDate(date)

              setIsOpen(false)
            }}
          />
        </Box>
      </Box>
    )
  }
)

export default memo(DateInput)
