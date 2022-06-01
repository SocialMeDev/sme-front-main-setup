import { memo } from 'react'
import { Collapse } from '@chakra-ui/react'

function CollapseDefault({ children, show = true, ...rest }) {
  return (
    <Collapse in={show} {...rest}>
      {children}
    </Collapse>
  )
}

export default memo(CollapseDefault)
