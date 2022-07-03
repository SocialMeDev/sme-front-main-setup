import { memo, useRef, useState, useCallback, useEffect } from 'react'

import {
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
      setTags(tags.filter((tag) => tag !== removedTag))
    },
    [tags]
  )

  const updateTag = useCallback((tagValue) => {
    inputRef.current.value = tagValue
  }, [])

  useEffect(() => {
    onChange(tags)
  }, [tags])

  useEffect(() => {
    setTags(defaultValues)
  }, [onChange])

  return (
    <Stack>
      <InputGroup size={size}>
        <Input ref={inputRef} {...rest} />

        <InputRightElement>
          <IconButton
            aria-label="Adicionar um novo item nesta lista"
            roundedTopLeft="none"
            roundedBottomLeft="none"
            size={size}
            variant="solid"
            onClick={() => addTag(inputRef.current.value)}
            icon={<Plus boxSize={8} />}
          />
        </InputRightElement>
      </InputGroup>

      <TagsList
        updateTag={updateTag}
        tags={tags}
        size={size}
        variant={variant}
        removeTag={removeTag}
        validate={validate}
      />
    </Stack>
  )
}

export default memo(InputTag)
