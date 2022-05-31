import { Flex, VStack } from '@chakra-ui/react'

import { useFormsManager } from './contexts/FormsManager/Provider'
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
      <VStack w="100%" spacing={2}>
        {questions.map((question, index) => (
          <QuestionCard key={index} index={index} question={question} />
        ))}
        <AddQuestionButton />
        <Flex justify="space-between" w="full">
          <Flex>{questions.length > 0 && <DeleteFormButton />}</Flex>
        </Flex>
      </VStack>
    </Flex>
  )
}
