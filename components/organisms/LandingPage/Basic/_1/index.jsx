import { memo } from 'react'
import { Flex, Box } from '@chakra-ui/react'

import { Navbar } from 'components'

function LandingPage({ navbar, children, ...rest }) {
  return (
    <Flex as="main">
      <Box w="full">
        <Navbar {...navbar} />
        <Box
          className="scrollbar-vertical"
          h="calc(100vh - 51px)"
          p={2}
          bg="bgContainer"
          {...rest}
        >
          {children}
        </Box>
      </Box>
    </Flex>
  )
}

export default memo(LandingPage)
