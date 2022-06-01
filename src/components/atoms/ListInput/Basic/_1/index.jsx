import { memo, useRef, useState } from 'react'
import {
  Box,
  Flex,
  Button,
  Input,
  InputGroup,
  InputRightAddon,
  useToast
} from '@chakra-ui/react'

function ListInput({ tags = [], setTags }) {
  const inputRef = useRef(null)
  const [inputValue, setInputValue] = useState('')

  const toast = useToast()

  async function addTag(value) {
    if (inputValue === '') return
    for (let i = 0; i < tags.length; i++) {
      if (tags[i] === value) {
        toast({
          description: 'Item repetido',
          status: 'error',
          duration: 3000,
          isClosable: true
        })
        return
      }
    }
    setTags((oldArray) => [...oldArray, value])
    setInputValue('')
  }

  function removeTag(value) {
    setTags(
      tags.filter(function filters(item) {
        return item !== value
      })
    )
  }

  return (
    <Box>
      <InputGroup>
        <Input
          ref={inputRef}
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          /*
          onKeyDown={(event) =>
            event.keyCode === 13 ? addTag(event.target.value) : null
          }
          */
        ></Input>
        <InputRightAddon p={2}>
          <Button size="xs" onClick={() => addTag(inputValue)}>
            +
          </Button>
        </InputRightAddon>
      </InputGroup>
      {tags.length > 0 && (
        <Box as="ul" listStyleType="none">
          {tags.map((tag) => (
            <Flex
              as="li"
              key={tag}
              my={1}
              p={2}
              justify="space-between"
              align="center"
              bg="weakBg"
              borderRadius="md"
            >
              {tag}{' '}
              <Button size="xs" onClick={() => removeTag(tag)}>
                X
              </Button>
            </Flex>
          ))}
        </Box>
      )}
    </Box>
  )
}

export default memo(ListInput)
