import { memo } from 'react'
import { Flex } from '@chakra-ui/react'

function FlexDefault(props) {
  return <Flex {...props} />
}

export default memo(FlexDefault)
