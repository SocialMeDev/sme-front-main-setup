import { memo } from 'react'
import { Td, useColorModeValue } from '@chakra-ui/react'

function CustomTd({ children, title, ...rest }) {
  const weakTextColor = useColorModeValue('gray.200', 'whiteAlpha.600')

  return (
    <>
      <Td
        p={4}
        color={weakTextColor}
        display={{
          base: 'table-cell',
          md: 'none'
        }}
        sx={{
          '@media print': {
            display: 'none'
          },
          textTransform: 'uppercase',
          fontSize: 'xs',
          fontWeight: 'normal'
        }}
        textAlign={{ base: 'center', md: 'left' }}
        {...rest}
      >
        {title}
      </Td>
      <Td {...rest} textAlign={{ base: 'center', md: 'left' }}>
        {children}
      </Td>
    </>
  )
}

export default memo(CustomTd)
