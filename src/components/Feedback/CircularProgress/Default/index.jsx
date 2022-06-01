import { memo } from 'react'
import { CircularProgress } from '@chakra-ui/react'

import { useSizeValue } from 'hooks'

function CircularProgressDefault({ children, ...rest }) {
  const size = useSizeValue('2rem', '4rem', '8ren')

  return (
    <CircularProgress size={size} {...rest}>
      {children}
    </CircularProgress>
  )
}

export default memo(CircularProgressDefault)
