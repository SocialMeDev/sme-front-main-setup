import { forwardRef, memo, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import {
  Center,
  Box,
  ModalBody,
  ModalFooter,
  Button,
  Flex,
  useDisclosure
} from '@chakra-ui/react'

import CustomFormInput from '../../components/CustomFormInput'
import CustomModal from '../../components/CustomModal'
import CustomIconButton from '../../components/CustomIconButton'

import createElement from '../../functions/createElement'

import { Moon } from 'components/atoms/Icons/Weather'
import { UploadSingle } from 'components/atoms/Upload/Single'

import useDraggable from 'hooks/useDraggable'

const InsertImagePlugin = forwardRef(({ size, ...rest }, editorRef) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const { setRender } = useDraggable()

  const { register, setValue, handleSubmit } = useForm()

  const insertImageIntoEditor = useCallback(
    (imgProps) => {
      const { alt, image, imageURL, width, height } = imgProps

      const src = imageURL || URL.createObjectURL(image)

      editorRef.current.focus()

      const img = createElement('img', {
        alt,
        src,
        width,
        height,
        class: 'draggable',
        draggable: 'false'
      })

      editorRef.current.append(img)

      setRender((oldRender) => !oldRender)
    },
    [editorRef.current]
  )

  const onSubmit = async (data) => {
    insertImageIntoEditor(data)
    onClose()
  }

  return (
    <>
      <CustomIconButton
        actionDescription="Adicionar imagem"
        aria-label="Adicionar imagem a um editor de texto"
        icon={<Moon />}
        onClick={onOpen}
        size={size}
        {...rest}
      />

      <CustomModal
        isOpen={isOpen}
        onClose={onClose}
        modalTitle="Adicionar imagem"
      >
        <Box as="form" onSubmit={handleSubmit(onSubmit)}>
          <ModalBody p={4}>
            <Flex direction="column" gap={4}>
              <Center>
                <UploadSingle onUpload={(file) => setValue('image', file)} />
              </Center>

              <CustomFormInput
                {...register('imageURL')}
                label="URL da imagem"
              />

              <CustomFormInput {...register('alt')} label="Texto alternativo" />

              <Flex gap={2}>
                <CustomFormInput
                  type="number"
                  label="Largura"
                  placeholder="auto"
                  {...register('width')}
                />

                <CustomFormInput
                  type="number"
                  label="Altura"
                  placeholder="auto"
                  {...register('height')}
                />
              </Flex>
            </Flex>
          </ModalBody>

          <ModalFooter borderTopWidth="1px" borderColor="gray.200">
            <Button variant="ghost" marginRight="auto" onClick={onClose}>
              Fechar
            </Button>
            <Button type="submit" variant="solid">
              Adicionar
            </Button>
          </ModalFooter>
        </Box>
      </CustomModal>
    </>
  )
})

export default memo(InsertImagePlugin)
