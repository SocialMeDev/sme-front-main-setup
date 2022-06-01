import { forwardRef, useImperativeHandle } from 'react'
import { Box, Stack } from '@chakra-ui/react'

import { useForm } from 'react-hook-form'
import QuestionContainer from './components/QuestionContainer'

const QuestionsViewer = forwardRef((props, ref) => {
  const { questions, onSubmit } = props

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors }
  } = useForm()

  useImperativeHandle(ref, () => ({
    submit: handleSubmit(onSubmit)
  }))

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        {questions?.map((question) => (
          <QuestionContainer
            key={question.id}
            question={question}
            register={register}
            errors={errors}
            setValue={setValue}
          />
        ))}
      </Stack>
    </Box>
  )
})

export default QuestionsViewer
