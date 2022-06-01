import { Box, Textarea } from '@chakra-ui/react'

export default function Paragraph() {
  return (
    <Box my={3}>
      <Textarea
        borderRadius="md"
        placeholder="Texto de resposta longa"
        disabled
      />
    </Box>
  )
}
