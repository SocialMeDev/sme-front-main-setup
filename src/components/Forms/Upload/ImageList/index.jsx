import { memo, useCallback, useState } from 'react'

import { Flex } from 'components'

import NewImage from './components/NewImage'
import ImageItem from './components/ImageItem'

function ImageList({
  label = 'Nova imagem',
  size = '125px',
  onChange,
  onDelete,
  defaultImages,
  isDeletable = true
}) {
  const [images, setImages] = useState(defaultImages)

  console.log(`images`, images)

  const updateImage = useCallback((event, currentIndex) => {
    const file = event.target.files[0]

    const url = URL.createObjectURL(file)

    const newImage = { file, url }

    setImages((oldImages) => {
      const newImages = oldImages.map((image, index) => {
        if (currentIndex === index) return url
        return image
      })

      return newImages
    })

    onChange(newImage)
  }, [])

  const createImage = useCallback((event) => {
    const file = event.target.files[0]

    const image = { file, url: URL.createObjectURL(file) }

    setImages((oldImages) => {
      return [...oldImages, image.url]
    })

    onChange(image)
  }, [])

  const removeImage = useCallback((image) => {
    setImages((oldImages) => {
      return oldImages.filter((oldImage) => oldImage.url !== image.url)
    })

    onDelete(image)
  }, [])

  return (
    <Flex p={4} flexWrap="wrap" gap={4}>
      <NewImage size={size} label={label} createImage={createImage} />

      {images.map((image, index) => (
        <ImageItem
          isDeletable={isDeletable}
          size={size}
          key={image}
          image={image}
          updateImage={(event) => updateImage(event, index)}
          removeImage={() => removeImage(image)}
        />
      ))}
    </Flex>
  )
}

export default memo(ImageList)
