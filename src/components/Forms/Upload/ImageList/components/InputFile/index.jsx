import { memo, Fragment, forwardRef } from 'react'

import { Input } from 'components'

const InputFile = forwardRef(({ children, ...rest }, ref) => {
  return (
    <Fragment>
      <Input ref={ref} type="file" hidden {...rest} />

      {children}
    </Fragment>
  )
})

export default memo(InputFile)
