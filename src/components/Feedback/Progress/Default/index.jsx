import { memo } from 'react'
import { Progress } from '@chakra-ui/react'

import { useSizeValue } from 'hooks'

function ProgressDefault({ size = useSizeValue('xs', 'sm', 'md'), ...rest }) {
  return <Progress rounded="md" size={size} {...rest} />
}

export default memo(ProgressDefault)
