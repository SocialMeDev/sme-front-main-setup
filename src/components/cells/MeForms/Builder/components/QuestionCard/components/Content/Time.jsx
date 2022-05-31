import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'

import { AlarmClockTime3 } from 'components/atoms/Icons/Interface'

export default function Time() {
  return (
    <Box my={3}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <AlarmClockTime3 color="gray.300" />
        </InputLeftElement>
        <Input borderRadius="md" placeholder="XX:XX" disabled />
      </InputGroup>
    </Box>
  )
}
