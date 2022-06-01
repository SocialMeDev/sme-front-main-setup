import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'

import { CalendarSchedule1_1 } from 'components/atoms/Icons/Interface'

export default function Date() {
  return (
    <Box my={3}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <CalendarSchedule1_1 color="gray.300" />
        </InputLeftElement>
        <Input borderRadius="md" placeholder="XX/XX/XXXX" disabled />
      </InputGroup>
    </Box>
  )
}
