import { memo } from 'react'
import { Text } from '@chakra-ui/react'

import { useSizeValue } from 'hooks'
import { sizes, variants } from './styles'

function TextDefault({
  fontSize = useSizeValue('xs', 'sm', 'md'),
  size,
  variant,
  ...rest
}) {
  return (
    <Text
      fontSize={fontSize}
      {...sizes[fontSize || size]}
      {...variants[variant]}
      {...rest}
    />
  )
}

export default memo(TextDefault)
