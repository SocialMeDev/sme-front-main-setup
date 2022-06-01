import { Box, Input } from '@chakra-ui/react'

export default function ShortAnswer() {
  return (
    <Box my={3}>
      <Input borderRadius="md" placeholder="Texto de resposta curta" disabled />
    </Box>
  )
}
