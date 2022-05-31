import { forwardRef, memo } from 'react'
import { Drawer, DrawerOverlay } from '@chakra-ui/react'

const DrawerDefault = forwardRef(({ children, ...rest }, ref) => {
  return (
    <Drawer {...rest} ref={ref}>
      <DrawerOverlay />

      {children}
    </Drawer>
  )
})

export default memo(DrawerDefault)
