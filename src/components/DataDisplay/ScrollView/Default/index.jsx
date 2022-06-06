import { memo } from 'react'
import { Stack } from 'components'

function ScrollView({ children, ...rest }) {
  return (
    <Stack
      className="accessible"
      tabIndex={0}
      spacing={0}
      overflowY="auto"
      overflowX="hidden"
      {...rest}
    >
      {children}
    </Stack>
  )
}

export default memo(ScrollView)
