import { memo, useState } from 'react'

import CustomIconButton from './CustomIconButton'

const ToggleIconButton = ({ onClick, ...rest }) => {
  const [toggle, setToggle] = useState(false)

  return (
    <CustomIconButton
      variant={toggle ? 'solid' : 'ghost'}
      onClick={() => {
        onClick()
        setToggle(!toggle)
      }}
      {...rest}
    />
  )
}

export default memo(ToggleIconButton)
