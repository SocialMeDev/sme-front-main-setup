import { memo, useState, useRef, useCallback, useEffect } from 'react'

import {
  Center,
  Box,
  ModalFooter,
  Button,
  Heading,
  Text,
  Modal,
  ModalBody,
  ModalContent,
  ModalCloseButton,
  ModalHeader
} from 'components'
import { useColorModeValue } from 'hooks'

function WebcamPreview({ isOpen, onClose, setImage }) {
  const [error, setError] = useState()
  const videoRef = useRef()

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(function (mediaStream) {
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream
          videoRef.current.play()
        }
      })
      .catch((error) => {
        if (error.message === 'Requested device not found') {
          setError('Você não possui dispositivo para tirar foto')
        } else {
          setError('Acesso ao dispositivo negado')
        }
      })
  }, [isOpen, videoRef.current])

  const cropImage = useCallback(() => {
    const video = document.getElementById('webcam-video')
    const canvas = document.createElement('canvas')
    canvas.height = video.videoHeight
    canvas.width = video.videoWidth
    const context = canvas.getContext('2d')
    context.drawImage(video, 0, 0)

    canvas.toBlob(function (blob) {
      const file = new File([blob], 'imagem.png')
      const url = URL.createObjectURL(file)

      setImage({ file, url })
      onClose()
    })
  }, [])

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent
        maxWidth={{ base: '95vw', md: '800px' }}
        maxHeight={{ base: '95vh', md: '650px' }}
        mt={{ base: 2, sm: 4, md: 6, lg: 10 }}
      >
        <ModalCloseButton />

        <ModalHeader>
          <Heading color="primary">Tirar foto</Heading>
          <Text>Clique no botão quando quiser tirar a foto da gravação</Text>
        </ModalHeader>

        <ModalBody p={0}>
          {error ? (
            <Center height="100%">
              <Heading>{error}</Heading>
            </Center>
          ) : (
            <Center bg={useColorModeValue('gray.100', 'gray.600')}>
              <Box ref={videoRef} as="video" id="webcam-video" />
            </Center>
          )}
        </ModalBody>

        <ModalFooter>
          <Button onClick={onClose}>Fechar</Button>
          <Button onClick={cropImage} variant="solid">
            Tirar foto
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default memo(WebcamPreview)
