import { memo } from 'react'

import { TabList } from '@chakra-ui/react'

function TabListDefault({ children, ...rest }) {
  return <TabList {...rest}>{children}</TabList>
}

export default memo(TabListDefault)
