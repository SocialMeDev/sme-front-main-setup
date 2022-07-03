import { memo } from 'react'

import { Flex, Box, Navbar, Sidebar } from 'components'

function Dashboard({ sidebar, navbar, children, ...rest }) {
  return (
    <Flex as="main">
      <Sidebar {...sidebar} />
      <Box w="full">
        <Navbar {...navbar} />
        <Box
          maxHeight="calc(100vh - 51px)"
          minHeight="calc(100vh - 51px)"
          bg="bgContainer"
          p={{ base: 2, md: 4 }}
          overflowY="auto"
          {...rest}
        >
          {children}
        </Box>
      </Box>
    </Flex>
  )
}

export default memo(Dashboard)
