import { memo, useRef, useState, useCallback, useEffect } from 'react'

import {
  FormControl,
  FormLabel,
  Flex,
  InfoModal,
  IconButton,
  Stack,
  Input,
  InputGroup,
  InputRightElement
} from 'components'
import { Plus } from 'components/Icons/Interface'
import { useHotKeyPressed } from 'hooks'

import TagsList from './components/TagsList'

function InputTag({
  label,
  validate,
  onChange,
  defaultValues = [],
  variant = 'outline',
  size,
  ...rest
}) {
  const [tags, setTags] = useState(defaultValues)

  const inputRef = useRef()

  useHotKeyPressed('Comma', () => {
    const isInputFocused = inputRef.current === document.activeElement

    if (isInputFocused) addTag(inputRef.current.value)
  })

  const addTag = useCallback((newTag) => {
    if (newTag.length > 0) setTags((oldTags) => [...oldTags, newTag])

    setTimeout(() => {
      inputRef.current.value = ''
    }, 100)
  }, [])

  const removeTag = useCallback(
    (removedTag) => {
      const newTags = tags.filter((tag) => tag !== removedTag)

      setTags(newTags)
    },
    [tags]
  )

  const updateTag = useCallback((tagValue) => {
    inputRef.current.value = tagValue
  }, [])

  useEffect(() => {
    onChange(tags)
  }, [tags])

  return (
    <Stack>
      <FormControl mb={0}>
        <Flex align="center" gap={2} p={1}>
          <FormLabel m={0}>{label}</FormLabel>
          <InfoModal
            title="Atalho"
            info="Digite ',' após escrever o que deseja inserir na lista."
          />
        </Flex>

        <InputGroup size={size}>
          <Input variant={variant} ref={inputRef} {...rest} />

          <InputRightElement>
            <IconButton
              roundedTopLeft="none"
              roundedBottomLeft="none"
              size={size}
              variant="solid"
              onClick={() => addTag(inputRef.current.value)}
              icon={<Plus boxSize={8} />}
            />
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <TagsList
        updateTag={updateTag}
        tags={tags}
        size={size}
        removeTag={removeTag}
        validate={validate}
      />
    </Stack>
  )
}

export default memo(InputTag)
