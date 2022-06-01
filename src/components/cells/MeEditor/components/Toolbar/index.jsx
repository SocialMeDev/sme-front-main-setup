import { forwardRef, memo } from 'react'
import { HStack } from '@chakra-ui/react'

import InsertImagePlugin from './plugins/InsertImage'
import ToggleBold from './plugins/ToggleBold'

const Toolbar = forwardRef(({ ...rest }, ref) => {
  return (
    <HStack
      minW="100%"
      borderBottom="1px solid"
      borderColor="borderColor"
      p={2}
      {...rest}
    >
      <InsertImagePlugin ref={ref} />
      <ToggleBold />
    </HStack>
  )
})

export default memo(Toolbar)
