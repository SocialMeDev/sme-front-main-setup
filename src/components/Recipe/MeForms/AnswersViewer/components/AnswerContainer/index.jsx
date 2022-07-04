import {
  Box,
  Text,
  Stack,
  Radio,
  RadioGroup,
  CheckboxGroup,
  Checkbox
} from 'components'

export default function AnswerContainer({ answer }) {
  function SHORT_TEXT() {
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

  function MULTIPLE_SELECTION_BOX() {
    return (
      <CheckboxGroup value={answer.answer}>
        <Stack>
          {answer.options.map((option) => (
            <Checkbox disabled key={option} value={option}>
              <Text color={answer.answer.includes(option) ? 'primary.500' : ''}>
                {option}
              </Text>
            </Checkbox>
          ))}
        </Stack>
      </CheckboxGroup>
    )
  }

  function SINGLE_SELECTION_LIST() {
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

  function DATE() {
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

  function TIME() {
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

  function Answer() {
    const kinds = {
      SHORT_TEXT: <SHORT_TEXT />,
      LONG_TEXT: <LONG_TEXT />,
      SINGLE_SELECTION_BOX: <SINGLE_SELECTION_BOX />,
      MULTIPLE_SELECTION_BOX: <MULTIPLE_SELECTION_BOX />,
      SINGLE_SELECTION_LIST: <SINGLE_SELECTION_LIST />,
      DATE: <DATE />,
      TIME: <TIME />
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
