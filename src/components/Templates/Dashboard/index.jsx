import { memo } from 'react'

import { Flex, Box, Navbar, Sidebar, ScrollView } from 'components'

function Dashboard({ sidebar, navbar, children }) {
  return (
    <Flex as="main">
      <Sidebar {...sidebar} />
      <Box w="full">
        <Navbar {...navbar} />
        <ScrollView
          maxHeight="calc(100vh - 51px)"
          minHeight="calc(100vh - 51px)"
          bg="bgContainer"
          p={{ base: 2, md: 4 }}
        >
          {children}
        </ScrollView>
      </Box>
    </Flex>
  )
}

export default memo(Dashboard)
