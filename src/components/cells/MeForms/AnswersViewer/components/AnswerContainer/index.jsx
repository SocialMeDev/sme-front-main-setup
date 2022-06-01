import { Box, Text, Stack, Radio, RadioGroup } from '@chakra-ui/react'

export default function AnswerContainer({ answer }) {
  function LONG_TEXT() {
    return (
      <Box p={2} border="1px solid" borderColor="gray.50" rounded="md">
        {answer.answer?.[0] ? (
          <Text color="primary.500">{answer.answer?.[0]}</Text>
        ) : (
          <Text color="gray.300">Sem resposta</Text>
        )}
      </Box>
    )
  }
  function SINGLE_SELECTION_BOX() {
    return (
      <RadioGroup value={answer.answer?.[0]}>
        <Stack>
          {answer.options.map((option) => (
            <Radio disabled key={option} value={option}>
              <Text color={answer.answer?.[0] === option ? 'primary.500' : ''}>
                {option}
              </Text>
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    )
  }

  function Answer() {
    const kinds = {
      LONG_TEXT: <LONG_TEXT />,
      SINGLE_SELECTION_BOX: <SINGLE_SELECTION_BOX />
    }
    return kinds[answer.kind] || 'Desconhecido'
  }

  return (
    <Stack>
      <Text>{`${answer.order}) ${answer.title}`}</Text>
      {answer.short_description && (
        <Text color="gray.300" textAlign="justify">
          {answer.short_description}:
        </Text>
      )}
      <Answer />
    </Stack>
  )
}
