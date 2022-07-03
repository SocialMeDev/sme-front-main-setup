import { memo, forwardRef } from 'react'

import { Box, Center, Image } from 'components'
import { useColorModeValue } from 'hooks'

const ImageWorkspace = forwardRef(({ src }, ref) => {
  return (
    <Center
      py={{ base: 10, sm: 6, md: 2 }}
      width="100%"
      height="100%"
      align="center"
      borderRightWidth="1px"
      borderColor="borderColor"
      bg={useColorModeValue('gray.50', 'gray.500')}
    >
      <Box bg="white">
        <Image
          maxWidth="400px"
          maxHeight="400px"
          src={src}
          ref={ref}
          alt="Imagem dinâmica"
        />
      </Box>
    </Center>
  )
})

export default memo(ImageWorkspace)
