import { memo } from 'react'

import { TabPanels } from '@chakra-ui/react'

function TabPanelsDefault({ children, ...rest }) {
  return <TabPanels {...rest}>{children}</TabPanels>
}

export default memo(TabPanelsDefault)
