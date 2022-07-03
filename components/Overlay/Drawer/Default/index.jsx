import { forwardRef, memo } from 'react'
import { Drawer, DrawerOverlay } from '@chakra-ui/react'

const DrawerDefault = forwardRef(
  ({ children, showOverlay = true, ...rest }, ref) => {
    return (
      <Drawer {...rest} ref={ref}>
        {showOverlay && <DrawerOverlay />}

        {children}
      </Drawer>
    )
  }
)

export default memo(DrawerDefault)
