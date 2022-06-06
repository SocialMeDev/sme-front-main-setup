import { memo } from 'react'

import { ScrollView } from 'components'

function AutoCompleteGroup({ isOpen, children }) {
  return (
    <ScrollView
      display={isOpen ? 'block' : 'none'}
      p={2}
      mt={2}
      spacing={1}
      bg="light"
      rounded="md"
      borderWidth="1px"
      borderColor="borderColor"
      minW="100%"
      height="auto"
      maxHeight="200px"
      position="absolute"
      zIndex="1000"
    >
      {children}
    </ScrollView>
  )
}

export default memo(AutoCompleteGroup)
