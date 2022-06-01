import { memo, useEffect, useState } from 'react'
import {
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Button,
  VStack
} from '@chakra-ui/react'

import { Search1 } from 'components/atoms/Icons/Interface'
import profileLinks from './variables/profileLinks'
import LinkItem from './components/LinkItem'

function Search({ placeholder }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [inputValue, setInputValue] = useState('')
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    if (!isOpen) {
      setInputValue('')
      setSuggestions([])
    }
  }, [isOpen])

  useEffect(() => {
    async function getLinks() {
      setSuggestions(profileLinks)
    }
    if (inputValue.length > 2) {
      getLinks()
    } else {
      setSuggestions([])
    }
  }, [inputValue])

  return (
    <>
      <Button
        leftIcon={<Search1 />}
        colorScheme="gray"
        color="strongText"
        onClick={onOpen}
        _hover={{ color: 'strongText' }}
      >
        {placeholder || 'O que você está procurando?'}
      </Button>
      <Modal
        scrollBehavior="inside"
        isOpen={isOpen}
        onClose={onClose}
        size="lg"
      >
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>
            <InputGroup size="lg">
              <InputLeftElement pointerEvents="none">
                <Search1 boxSize="10" color="activeBg" />
              </InputLeftElement>
              <Input
                type="text"
                placeholder={placeholder}
                onChange={(event) => setInputValue(event.target.value)}
                value={inputValue}
              />
            </InputGroup>
          </ModalHeader>

          {suggestions.length > 0 && (
            <ModalBody>
              <VStack>
                {suggestions.map((suggestion, index) => (
                  <LinkItem key={index} item={suggestion} />
                ))}
              </VStack>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default memo(Search)
