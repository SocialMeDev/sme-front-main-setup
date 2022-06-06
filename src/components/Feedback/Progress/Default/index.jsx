import { memo } from 'react'
import { Progress } from '@chakra-ui/react'

import { useSizeValue } from 'hooks'

function ProgressDefault({
  size = useSizeValue('xs', 'sm', 'md'),
  value = 50,
  ...rest
}) {
  return (
    <Progress
      rounded="md"
      title={`Barra de progresso com ${value}%`}
      aria-label="Barra de progresso"
      role="progressbar"
      size={size}
      value={value}
      {...rest}
    />
  )
}

export default memo(ProgressDefault)
