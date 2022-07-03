import { useEffect, useState } from 'react'
import { brazilianDateMask, timeMask } from 'utils/masks'
import { dateInBrazilianFormat } from 'utils/transforms/date'
import { americanTimestampParser, americanDateParser } from 'utils/parsers/date'

import {
  MaskInput,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Loader,
  Stack
} from 'components'

export default function DateAndTimeInputs({
  errors,
  getValues,
  setValue,
  name
}) {
  const [loadingContent, setLoadingContent] = useState(true)
  const [dateInput, setDateInput] = useState('')
  const [hourInput, setHourInput] = useState('')

  if (!name) return <></>

  useEffect(() => {
    if (dateInput.length === 10 && hourInput.length === 5) {
      setValue(
        name,
        americanTimestampParser(`${americanDateParser(dateInput)} ${hourInput}`)
      )
    }
  }, [dateInput, hourInput])

  useEffect(() => {
    async function prepareInitialValues() {
      if (getValues) {
        const formValues = getValues()
        const value = formValues[name]
        if (value) {
          console.log(value)
          if (value.split(' ')[0]) {
            setDateInput(dateInBrazilianFormat(value.split(' ')[0]))
          }
          if (value.split(' ')[1]) {
            setHourInput(value.split(' ')[1])
          }
          return setLoadingContent(false)
        }
      }
      return setLoadingContent(false)
    }
    prepareInitialValues()
  }, [])

  if (loadingContent) {
    return <Loader h="50px" />
  }

  return (
    <Stack direction="row" align="center">
      <FormControl px={1} my={1} isInvalid={errors?.[name]}>
        <FormLabel htmlFor="executed_at">Data</FormLabel>
        <MaskInput
          value={dateInput}
          mask={brazilianDateMask}
          onChange={(event) => setDateInput(event.target.value)}
        />
        <FormErrorMessage>
          {errors?.[name] && errors?.[name]?.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl px={1} my={1} isInvalid={errors?.[name]}>
        <FormLabel htmlFor="executed_at">Hora</FormLabel>
        <MaskInput
          value={hourInput}
          mask={timeMask}
          onChange={(event) => setHourInput(event.target.value)}
        />
        <FormErrorMessage>
          {errors?.[name] && errors?.[name]?.message}
        </FormErrorMessage>
      </FormControl>
    </Stack>
  )
}
