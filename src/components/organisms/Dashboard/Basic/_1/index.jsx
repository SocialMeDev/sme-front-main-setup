import { memo } from 'react'
import { Flex, Box } from '@chakra-ui/react'
import { Sidebar } from 'components/molecules/Sidebar/Basic'
import { Navbar } from 'components/molecules/Navbar/Basic'

function Dashboard({ sidebar, navbar, children }) {
  return (
    <Flex as="main">
      <Sidebar {...sidebar} />
      <Box w="full">
        <Navbar {...navbar} />
        <Box
          p={[2, 4]}
          h="calc(100vh - 51px)"
          bg="websiteBg"
          className="scrollbar-vertical"
        >
          {children}
        </Box>
      </Box>
    </Flex>
  )
}

export default memo(Dashboard)
