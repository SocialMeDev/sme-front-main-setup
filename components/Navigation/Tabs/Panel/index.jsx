import { memo } from 'react'

import { TabPanel } from '@chakra-ui/react'

function TabPanelsDefault({ children, ...rest }) {
  return <TabPanel {...rest}>{children}</TabPanel>
}

export default memo(TabPanelsDefault)
