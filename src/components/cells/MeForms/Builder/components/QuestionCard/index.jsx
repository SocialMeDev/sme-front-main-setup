import {
  Editable,
  EditableInput,
  EditablePreview,
  Divider,
  Flex,
  VStack,
  Fade
} from '@chakra-ui/react'

import { useFormsManager } from '../../contexts/FormsManager/Provider'
import { Card } from 'components/atoms/Card/Basic'
import Content from './components/Content'
import KindSelection from './components/KindSelection'
import Footer from './components/Footer'

export default function QuestionCard({ index, question }) {
  const { updateFormField } = useFormsManager()

  return (
    <Card>
      <VStack align="start">
        <Flex align="center" justify="space-between" w="full">
          <Flex mr={4} w="full">
            <Editable
              w="full"
              defaultValue={question.title || 'Título da Questão'}
              onSubmit={(value) =>
                updateFormField(question.id, { ...question, title: value })
              }
            >
              <EditablePreview />
              <EditableInput />
            </Editable>
          </Flex>

          <Flex>
            <Fade in={true}>
              <KindSelection question={question} />
            </Fade>
          </Flex>
        </Flex>
        <Flex w="full">
          <Editable
            w="full"
            defaultValue={question.short_description || 'Descrição da Questão'}
            onSubmit={(value) =>
              updateFormField(question.id, {
                ...question,
                short_description: value
              })
            }
          >
            <EditablePreview />
            <EditableInput />
          </Editable>
        </Flex>
      </VStack>
      <Fade in={true}>
        <Content question={question} />
      </Fade>
      <Divider my={2} />
      <Fade in={true}>
        <Footer question={question} index={index} />
      </Fade>
    </Card>
  )
}
