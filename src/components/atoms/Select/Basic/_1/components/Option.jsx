import { memo, useMemo } from 'react'
import { Box } from '@chakra-ui/react'

function Option({ label, value, size = 'sm', ...rest }) {
  const defaultSize = useMemo(() => {
    const sizes = {
      sm: '8',
      md: '10',
      lg: '12'
    }

    return sizes[size]
  }, [size])

  return (
    <Box
      px={2}
      w="100%"
      textAlign="left"
      h={defaultSize}
      fontSize={size || defaultSize}
      as="button"
      type="button"
      rounded="sm"
      name={value}
      _hover={{ color: 'hoverColor', bg: 'hoverBg' }}
      {...rest}
    >
      {label}
    </Box>
  )
}

export default memo(Option)
