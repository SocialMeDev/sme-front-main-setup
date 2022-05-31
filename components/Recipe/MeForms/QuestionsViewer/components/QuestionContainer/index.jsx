import {
  Stack,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  Checkbox,
  CheckboxGroup,
  Select
} from '@chakra-ui/react'
import { useState } from 'react'

import { MaskInput } from 'components/atoms/MaskInput/Basic'
import { timeMask, brazilianDateMask } from 'utils/masks'

const size = 'sm'
const rounded = 'md'

export default function QuestionContainer({
  question,
  register,
  errors,
  setValue
}) {
  const [idString] = useState(question.id.toString())

  function SHORT_TEXT() {
    return (
      <Input
        size={size}
        rounded={rounded}
        {...register(idString, { required: question.is_required })}
      />
    )
  }
  function LONG_TEXT() {
    return (
      <Textarea
        size={size}
        rounded={rounded}
        {...register(idString, { required: question.is_required })}
      />
    )
  }
  function SINGLE_SELECTION_BOX() {
    return (
      <RadioGroup>
        <Stack
          direction="column"
          pl={2}
          onChange={(event) => setValue(idString, event.target.value)}
        >
          {question.options?.map((option) => (
            <Radio key={option} value={option}>
              {option}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    )
  }
  function MULTIPLE_SELECTION_BOX() {
    return (
      <CheckboxGroup onChange={(value) => setValue(idString, value)}>
        <Stack direction="column" pl={2}>
          {question.options?.map((option) => (
            <Checkbox key={option} value={option}>
              {option}
            </Checkbox>
          ))}
        </Stack>
      </CheckboxGroup>
    )
  }
  function SINGLE_SELECTION_LIST() {
    return (
      <Select {...register(idString, { required: question.is_required })}>
        {question.options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
    )
  }
  function DATE() {
    return (
      <MaskInput
        inputMode="numeric"
        size={size}
        mask={brazilianDateMask}
        rounded={rounded}
        {...register(idString, { required: question.is_required })}
      />
    )
  }
  function TIME() {
    return (
      <MaskInput
        inputMode="numeric"
        size={size}
        mask={timeMask}
        rounded={rounded}
        {...register(idString, { required: question.is_required })}
      />
    )
  }

  const kinds = {
    SHORT_TEXT: SHORT_TEXT(),
    LONG_TEXT: LONG_TEXT(),
    SINGLE_SELECTION_BOX: SINGLE_SELECTION_BOX(),
    MULTIPLE_SELECTION_BOX: MULTIPLE_SELECTION_BOX(),
    SINGLE_SELECTION_LIST: SINGLE_SELECTION_LIST(),
    DATE: DATE(),
    TIME: TIME()
  }

  return (
    <FormControl
      my={1}
      isInvalid={errors[idString]}
      isRequired={question.is_required}
    >
      <FormLabel htmlFor={idString} margin={0}>
        {`${question.order}) ${question.title}`}
      </FormLabel>
      <FormHelperText margin={0}>{question.short_description}</FormHelperText>
      {kinds[question.kind] || 'Desconhecido'}
      <FormErrorMessage>
        {errors[idString] &&
          errors[idString].type === 'required' &&
          'Campo é obrigatório'}
      </FormErrorMessage>
    </FormControl>
  )
}
