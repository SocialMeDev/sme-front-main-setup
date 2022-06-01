import { memo, useRef, useState, useCallback, useEffect } from 'react'

import {
  Tooltip,
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
  const [focus, setFocus] = useState(false)
  const [tags, setTags] = useState(defaultValues)

  const inputRef = useRef()

  useHotKeyPressed('Comma', () => {
    if (focus) addTag(inputRef.current.value)
  })

  const addTag = useCallback((newTag) => {
    if (newTag.length > 0) {
      setTags((oldTags) => [...oldTags, newTag])
    }

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

  const editTag = useCallback((tagValue) => {
    inputRef.current.value = tagValue
  }, [])

  useEffect(() => {
    onChange(tags)
  }, [tags])

  return (
    <Stack>
      <InputGroup size={size}>
        <Input
          variant={variant}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          ref={inputRef}
          {...rest}
        />

        <InputRightElement>
          <Tooltip label='Apertar "," para salvar o item'>
            <IconButton
              roundedTopLeft="none"
              roundedBottomLeft="none"
              size={size}
              onClick={() => addTag(inputRef?.current?.value || '')}
              variant="solid"
              icon={<Plus boxSize={8} />}
            />
          </Tooltip>
        </InputRightElement>
      </InputGroup>

      <TagsList
        editTag={editTag}
        tags={tags}
        size={size}
        removeTag={removeTag}
        validate={validate}
      />
    </Stack>
  )
}

export default memo(InputTag)
