import { memo } from 'react'
import { CircularProgressLabel } from '@chakra-ui/react'

function CircularProgressLabelDefault(props) {
  return <CircularProgressLabel {...props} />
}

export default memo(CircularProgressLabelDefault)
