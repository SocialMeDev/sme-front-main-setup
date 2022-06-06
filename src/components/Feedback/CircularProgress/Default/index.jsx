import { memo } from 'react'
import { CircularProgress } from '@chakra-ui/react'

import { useSizeValue } from 'hooks'

function CircularProgressDefault({ children, value = 50, ...rest }) {
  const size = useSizeValue('2rem', '4rem', '8ren')

  return (
    <CircularProgress
      title={`Barra de progresso circular com ${value}%`}
      role="progressbar"
      size={size}
      value={value}
      {...rest}
    >
      {children}
    </CircularProgress>
  )
}

export default memo(CircularProgressDefault)
