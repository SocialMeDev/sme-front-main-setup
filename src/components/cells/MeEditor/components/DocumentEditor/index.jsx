import { memo, forwardRef } from 'react'
import { Flex, Box, useColorModeValue } from '@chakra-ui/react'

const EditorContent = forwardRef(({ pageSettings, ...rest }, ref) => {
  const { margins, pageSize } = pageSettings

  const bg = useColorModeValue('gray.50', 'gray.800')
  const pageBg = useColorModeValue('white', 'whiteAlpha.800')

  return (
    <Flex w="100%" p={4} bg={bg} align="center" justify="center">
      <Box
        {...margins}
        position="relative"
        className="role-button"
        contentEditable="true"
        boxShadow="0 0 5px 0 rgba(0, 0, 0, .2)"
        cursor="text"
        rounded="none"
        bg={pageBg}
        minH={pageSize.width}
        w={pageSize.height}
        sx={{
          '@page': {
            size: 'A4',
            margin: 0
          },
          '@media print': {
            '&': {
              m: '0',
              boxShadow: 'none'
            }
          }
        }}
        ref={ref}
        {...rest}
      />
    </Flex>
  )
})

export default memo(EditorContent)
