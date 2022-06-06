import { memo, forwardRef } from 'react'

import { Box } from 'components'

const FocusableBox = forwardRef((props, ref) => {
  return (
    <Box
      cursor="pointer"
      transition="all 0.4s"
      ref={ref}
      tabIndex={0}
      className="accessible"
      {...props}
    />
  )
})

export default memo(FocusableBox)
