import {
  Divider,
  Box,
  Flex,
  Text,
  Input,
  Heading,
  IconButton
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'

import { useFormsManager } from '../../../../contexts/FormsManager/Provider'
import { TrashDeleteBin2 } from 'components/Icons/Interface'
import { Circle, Square } from 'components/Icons/BasicShapes'
import toast from 'utils/toast'

export default function Options({ question, kind }) {
  const { updateFormField } = useFormsManager()
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  async function addOption(value) {
    if (!error) {
      const options = question.options
      if (options.includes(value)) {
        setError(true)
        return toast.error('Já existe essa opção na questão')
      }
      options.push(value)
      setValue('')
      updateFormField(question.id, {
        ...question,
        options: options
      })
    }
  }

  async function removeOption(value) {
    const options = question.options.filter((item) => item !== value)
    updateFormField(question.id, {
      ...question,
      options: options
    })
  }

  function renderIcon() {
    switch (kind) {
      case 'MULTIPLE_SELECTION_BOX':
        return <Square boxSize="5" />
      case 'SINGLE_SELECTION_BOX':
      default:
        return <Circle boxSize="5" />
    }
  }

  useEffect(() => {
    setError(false)
  }, [value])

  return (
    <Box my={3}>
      <Heading fontSize={'sm'}>Opções</Heading>
      {question?.options?.map((option) => (
        <Box my={2} key={option}>
          <Flex alignItems="center" justify="space-between">
            <Flex gap={1} alignItems="center">
              {renderIcon()}
              <Text>{option}</Text>
            </Flex>
            <IconButton
              aria-label="Theme button"
              variant="ghost"
              icon={<TrashDeleteBin2 />}
              colorScheme="red"
              onClick={() => removeOption(option)}
              size="sm"
            />
          </Flex>
          <Divider mt={2} />
        </Box>
      ))}

      <Box my={2}>
        <Flex alignItems="center" justify="space-between">
          <Flex gap={1} alignItems="center">
            {renderIcon()}
            <Input
              borderRadius="md"
              value={value}
              onChange={(event) => setValue(event.target.value)}
              placeholder="Adicionar Opção"
              onKeyDown={(event) =>
                event.keyCode === 13 ? addOption(event.target.value) : null
              }
            />
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}
