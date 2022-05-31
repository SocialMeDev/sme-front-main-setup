import { memo } from 'react'

import { Flex, Box, ScrollView } from 'components'
import { Navbar } from 'components'

function LandingPage({ navbar, children, ...rest }) {
  return (
    <Flex as="main">
      <Box w="full">
        <Navbar {...navbar} />
        <ScrollView minH="calc(100vh - 51px)" bg="bgContainer" {...rest}>
          {children}
        </ScrollView>
      </Box>
    </Flex>
  )
}

export default memo(LandingPage)
