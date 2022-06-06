import { memo, useState, useCallback } from 'react'

import { Flex } from 'components'
import { useDisclosure } from 'hooks'
import NewImage from './components/NewImage'
import ImageItem from './components/ImageItem'
import ImageCropInModal from '../../../ImageCropInModal'

function ImageList({
  size,
  images,
  setImages,
  selectedImageToUpdate,
  setSelectedImageToUpdate,
  onUpload,
  onDelete
}) {
  const [imageToAdd, setImageToAdd] = useState({})

  const { isOpen, onOpen, onClose } = useDisclosure()

  const addImage = useCallback(
    (file) => {
      if (!file) return

      const url = URL.createObjectURL(file)

      const newImage = { file, url }

      setImageToAdd(newImage)

      onOpen()
    },
    [images]
  )

  const handleImageUpload = useCallback(async (image) => {
    const { file } = image

    const url = URL.createObjectURL(file)

    const newImage = { file, url }

    await onUpload(file)

    setImages({ ...images, newImage })
  }, [])

  return (
    <Flex gap={4} flexWrap="wrap">
      <NewImage size={size} addImage={addImage} />

      {images.map((item) => (
        <ImageItem
          key={item.url}
          image={item}
          size={size}
          selectedImageToUpdate={selectedImageToUpdate}
          setSelectedImageToUpdate={setSelectedImageToUpdate}
          onDelete={onDelete}
        />
      ))}

      <ImageCropInModal
        isOpen={isOpen}
        onClose={onClose}
        imageURL={imageToAdd.url}
        onUpload={async () => await handleImageUpload(imageToAdd)}
      />
    </Flex>
  )
}

export default memo(ImageList)
