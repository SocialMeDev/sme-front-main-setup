import { useEffect, useContext, useState, useCallback } from 'react'

import { Box, useColorModeValue } from '@chakra-ui/react'
import { Loader } from 'components/atoms/Loader/Basic'
import FormsManagerContext from './Context'

export default function FormsManagerProvider({
  children,
  pathnameKey,
  routes
}) {
  const [loadingContent, setLoadingContent] = useState(true)
  const [contentHeight, setContentHeight] = useState(100)
  const [questions, setQuestions] = useState([])

  const readFormFields = useCallback(async () => {
    const response = await routes?.readFormFields()
    if (response.header.success) {
      setQuestions(response.body[pathnameKey].elements)
    }
    setLoadingContent(false)
  }, [])

  useEffect(() => {
    setContentHeight(document.getElementById('container').clientHeight)
  }, [questions])

  useEffect(() => {
    async function readAsyncData() {
      await readFormFields()
    }
    readAsyncData()
  }, [])

  async function createFormField() {
    const response = await routes?.createFormField({
      title: 'Questão sem título',
      short_description: undefined,
      kind: 'SHORT_TEXT',
      is_required: false,
      has_validation: false,
      order: questions.length + 1,
      page: 1,
      options: []
    })
    if (response.header.success) {
      readFormFields()
    }
  }

  async function updateFormField(fieldId, data) {
    const response = await routes?.updateFormField(fieldId, data)
    if (response.header.success) {
      await readFormFields()
    }
    setLoadingContent(false)
  }

  async function deleteFormField(fieldId, onClose) {
    setLoadingContent(true)
    const fields = []
    for (let i = 0; i < questions.length; i++) {
      let newItem = {
        id: questions[i].id,
        order: i + 1,
        page: 1
      }
      fields.push(newItem)
    }
    const response = await routes?.deleteFormField(fieldId, { fields: fields })
    if (response.header.success) {
      onClose()
      await readFormFields()
    }
    setLoadingContent(false)
  }

  async function deleteAllForm(onClose) {
    setLoadingContent(true)
    const response = await routes?.deleteAllForm()
    if (response.header.success) {
      onClose()
      await readFormFields()
    }
    setLoadingContent(false)
  }

  async function sortFormFields(newQuestions) {
    setLoadingContent(true)
    const fields = []
    for (let i = 0; i < newQuestions.length; i++) {
      let newItem = {
        id: newQuestions[i].id,
        order: i + 1,
        page: 1,
        title: newQuestions[i].title
      }
      fields.push(newItem)
    }
    const response = await routes?.sortFormFields({ fields: fields })
    if (response.header.success) {
      setQuestions(response.body[pathnameKey].elements)
    }
    setLoadingContent(false)
  }

  async function getFormFieldsIndex(data) {
    for (let i = 0; i < questions.length; i++) {
      if (questions[i].id === data.id) {
        return i
      }
    }
  }

  async function duplicateFormField(data) {
    const index = await getFormFieldsIndex(data)
    const response = await routes?.createFormField(data)
    let question
    for (let key in response.body) {
      question = response.body[key]
    }
    await setQuestions((questions) => {
      return [
        ...questions.slice(0, index),
        {
          ...question
        },
        {
          ...question
        },
        ...questions.slice(index + 1)
      ]
    })
    if (response.header.success) {
      await sortFormFields()
    }
    setLoadingContent(false)
  }

  async function goUpQuestionLevel(index) {
    const activeQuestion = questions[index]
    const previousQuestion = questions[index - 1]
    sortFormFields([
      ...questions.slice(0, index - 1),
      {
        ...activeQuestion
      },
      {
        ...previousQuestion
      },
      ...questions.slice(index + 1)
    ])
  }

  async function goDownQuestionLevel(index) {
    setLoadingContent(true)
    const activeQuestion = questions[index]
    const lateQuestion = questions[index + 1]
    updateFormField(activeQuestion.id, {
      ...activeQuestion,
      order: index + 2
    })
    updateFormField(lateQuestion.id, {
      ...lateQuestion,
      order: index + 1
    })
  }

  async function duplicateQuestion(index) {
    setLoadingContent(true)
    const activeQuestion = questions[index]
    setQuestions((questions) => {
      return [
        ...questions.slice(0, index),
        {
          ...activeQuestion
        },
        {
          ...activeQuestion
        },
        ...questions.slice(index + 1)
      ]
    })
  }

  return (
    <FormsManagerContext.Provider
      value={{
        questions,
        setQuestions,
        createFormField,
        updateFormField,
        deleteFormField,
        deleteAllForm,
        duplicateFormField,
        goUpQuestionLevel,
        goDownQuestionLevel,
        duplicateQuestion
      }}
    >
      <Box
        id="container"
        px={4}
        bg={useColorModeValue('gray.50', 'gray.900')}
        rounded="md"
      >
        {loadingContent ? <Loader height={contentHeight} /> : children}
      </Box>
    </FormsManagerContext.Provider>
  )
}

export const useFormsManager = () => useContext(FormsManagerContext)
