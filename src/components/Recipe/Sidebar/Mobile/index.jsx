import { Fragment, memo } from 'react'
import {
  DrawerBody,
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton
} from 'components'

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

        <DrawerBody p={0}>
          <Box bg="bgContent" w="100%" transition="all 0.4s">
            {rest.plugins?.map((plugin, index) => (
              <RenderPlugin {...plugin} key={index} />
            ))}
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default memo(MobileSidebar)
