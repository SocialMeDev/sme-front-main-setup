import { memo } from 'react'
import { Grid } from '@chakra-ui/react'

function GridDefault(props) {
  return <Grid {...props} />
}

export default memo(GridDefault)
