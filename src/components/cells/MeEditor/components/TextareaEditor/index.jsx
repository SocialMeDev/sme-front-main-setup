import { memo, forwardRef } from 'react'
import { Box } from '@chakra-ui/react'

const TextareaEditor = forwardRef(({ ...rest }, ref) => {
  return (
    <Box
      w="100%"
      h="500px"
      contentEditable="true"
      position="relative"
      cursor="text"
      rounded="sm"
      transition="all 0.4s"
      outline="2px solid transparent"
      p={4}
      bg="lightColor"
      _focus={{
        boxShadow: `0 0 0 3px #90CDF4 !important`
      }}
      {...rest}
      ref={ref}
    />
  )
})

export default memo(TextareaEditor)
