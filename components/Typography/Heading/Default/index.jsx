import { memo } from 'react'
import { Heading } from '@chakra-ui/react'

import { sizes } from './styles'
import { useSizeValue } from 'hooks'

function HeadingDefault({
  size = useSizeValue('sm', 'md', 'lg'),
  children,
  ...rest
}) {
  return (
    <Heading {...sizes[size]} {...rest}>
      {children}
    </Heading>
  )
}

export default memo(HeadingDefault)
