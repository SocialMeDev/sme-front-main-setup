import { memo } from 'react'
import { Text } from 'components'

function SpanDefault({ ...rest }) {
  return <Text as="span" {...rest} />
}

export default memo(SpanDefault)
