import { memo } from 'react'

import { Tab } from '@chakra-ui/react'

function TabDefault({ children, ...rest }) {
  return (
    <Tab rounded="none" {...rest}>
      {children}
    </Tab>
  )
}

export default memo(TabDefault)
