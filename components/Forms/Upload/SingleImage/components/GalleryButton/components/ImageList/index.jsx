import { memo } from 'react'

import { Stack, Heading, Text, SimpleGrid } from 'components'
import ImageItem from './components/ImageItem'

function ImageList({
  images,
  selectedImageToUpdate,
  setSelectedImageToUpdate,
  onDelete
}) {
  return (
    <Stack px={2} overflowY="auto" maxHeight="300px">
      <Stack spacing={0}>
        <Heading>Minhas fotos</Heading>
        <Text>
          Clique em uma imagem e no botão respectivamente para trocar a foto
          atual
        </Text>
      </Stack>

      <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 5 }}>
        {images.map((item) => (
          <ImageItem
            key={item.url}
            image={item}
            selectedImageToUpdate={selectedImageToUpdate}
            setSelectedImageToUpdate={setSelectedImageToUpdate}
            onDelete={onDelete}
          />
        ))}
      </SimpleGrid>
    </Stack>
  )
}

export default memo(ImageList)
