import { useFormsManager } from './contexts/FormsManager/Provider'
import { Flex, Stack } from 'components'
import AddQuestionButton from './components/AddQuestionButton'
import QuestionCard from './components/QuestionCard'
import DeleteFormButton from './components/DeleteFormButton'

export default function MeForms() {
  const { questions } = useFormsManager()
  return (
    <Flex
      pt={5}
      pb={220}
      justify="center"
      rounded={'md'}
      direction="column"
      align="center"
    >
      <Stack w="100%">
        {questions.map((question, index) => (
          <QuestionCard key={index} index={index} question={question} />
        ))}
        <AddQuestionButton />
        <Flex justify="space-between" w="full">
          <Flex>{questions.length > 0 && <DeleteFormButton />}</Flex>
        </Flex>
      </Stack>
    </Flex>
  )
}
