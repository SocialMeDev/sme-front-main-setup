import { Fragment, memo } from 'react'
import {
  Flex,
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton
} from '@chakra-ui/react'

import { useSidebar } from 'contexts/Sidebar/Provider'

import GoBackLogo from './plugins/GoBackLogo'
import Logo from './plugins/Logo'
import MenuGroup from './plugins/MenuGroup'

const plugins = {
  GoBackLogo,
  Logo,
  MenuGroup
}

function MobileSidebar({ ...rest }) {
  const { isOpen, onClose } = useSidebar()

  function RenderPlugin({ name, visible = true, props }) {
    if (visible) {
      const Plugin = plugins[name]
      return <Plugin {...props} />
    }

    return <Fragment />
  }

  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="left" size="xs">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />

        <Box h="100vh" pb="10" w="full" transition="all 0.5s">
          <Flex
            bg="commonBg"
            direction="column"
            fontSize="sm"
            aria-label="Main Navigation"
            justify="space-between"
          >
            {rest.plugins?.map((plugin, index) => (
              <RenderPlugin {...plugin} key={index} />
            ))}
          </Flex>
        </Box>
      </DrawerContent>
    </Drawer>
  )
}

export default memo(MobileSidebar)
