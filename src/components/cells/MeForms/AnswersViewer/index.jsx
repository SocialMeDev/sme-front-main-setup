import { Box, Stack } from '@chakra-ui/react'
import AnswerContainer from './components/AnswerContainer'

export default function AnswersViewer({ answers }) {
  return (
    <Box>
      <Stack spacing={4}>
        {answers.map((answer) => (
          <AnswerContainer key={answer.id} answer={answer} />
        ))}
      </Stack>
    </Box>
  )
}
