import { memo } from 'react'
import { GridItem } from '@chakra-ui/react'

function GridItemDefault(props) {
  return <GridItem {...props} />
}

export default memo(GridItemDefault)
