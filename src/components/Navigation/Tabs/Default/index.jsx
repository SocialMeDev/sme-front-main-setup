import { memo } from 'react'

import { Tabs } from '@chakra-ui/react'

function TabsDefault({ children, ...rest }) {
  return <Tabs {...rest}>{children}</Tabs>
}

export default memo(TabsDefault)
