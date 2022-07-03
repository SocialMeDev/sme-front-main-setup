import { useEffect } from 'react'

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Flex,
  Text,
  Box
} from 'components'
import { slugMask } from 'utils/masks'

export default function NameAndSlugInputs({
  register,
  errors,
  watch,
  context = 'create',
  setValue
}) {
  if (!register) return <></>

  const slugName = watch('name')
  const slug = watch('slug')

  useEffect(() => {
    if (context === 'create') {
      setValue('slug', slugMask(slugName))
    }
  }, [slugName])

  return (
    <Box direction="column">
      <FormControl px={1} my={1} isInvalid={errors?.name}>
        <FormLabel htmlFor="name">Nome</FormLabel>
        <Input {...register('name')} />
        <FormErrorMessage>
          {errors?.name && errors?.name?.message}
        </FormErrorMessage>
      </FormControl>
      <Flex pl={2}>
        <Text fontSize={'xs'}>
          <Text as="span" fontSize={'xs'}>
            Slug:{' '}
          </Text>
          {slug}
        </Text>
      </Flex>
    </Box>
  )
}
