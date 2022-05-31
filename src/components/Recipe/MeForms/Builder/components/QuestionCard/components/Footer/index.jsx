import {
  Center,
  Divider,
  Flex,
  FormLabel,
  Switch,
  Text,
  HStack
} from '@chakra-ui/react'

import { useFormsManager } from '../../../../contexts/FormsManager/Provider'
import GoUpLevelButton from './GoUpLevelButton'
import GoDownLevelButton from './GoDownLevelButton'
import DeleteQuestionButton from './DeleteQuestionButton'
//import DuplicateQuestionButton from './DuplicateQuestionButton'

export default function QuestionCardFooter({ index, question }) {
  const { updateFormField } = useFormsManager()

  return (
    <Flex justify="space-between" align="center">
      <Flex align="center">
        <HStack>
          <Text>Ordem: {index + 1}</Text>
          <GoUpLevelButton index={index} />
          <GoDownLevelButton index={index} />
        </HStack>
        <Center height="30px" px={3}>
          <Divider orientation="vertical" />
        </Center>
      </Flex>
      <Flex>
        <Flex align="center">
          <FormLabel mb="0">Obrigatória</FormLabel>
          <Switch
            isChecked={question.is_required}
            onChange={(event) =>
              updateFormField(question.id, {
                ...question,
                is_required: event.target.checked
              })
            }
          />
        </Flex>
        <Center height="30px" px={3}>
          <Divider orientation="vertical" />
        </Center>
        {/* <DuplicateQuestionButton question={question} /> */}
        <DeleteQuestionButton fieldId={question.id} />
      </Flex>
    </Flex>
  )
}
