import { memo } from 'react'

import { useDisclosure } from 'hooks'
import {
  Heading,
  Flex,
  IconButton,
  Drawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton
} from 'components'
import { SettingEditFilterGear } from 'components/Icons/Interface'
import ThemeContainer from './components/ThemeContainer'
import InterfaceContainer from './components/InterfaceContainer'

function SettingsButton({ variant = 'ghost' }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <IconButton
        aria-label="Configurações"
        variant={variant}
        icon={<SettingEditFilterGear />}
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Heading>Configurações</Heading>
          </DrawerHeader>
          <Flex flexDirection="column" p={4} gap={8}>
            <ThemeContainer />
            <InterfaceContainer />
          </Flex>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default memo(SettingsButton)
