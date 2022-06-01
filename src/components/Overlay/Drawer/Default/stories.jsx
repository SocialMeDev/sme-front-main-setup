import { useDisclosure } from 'hooks'

import {
  Heading,
  Input,
  Button,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  DrawerFooter
} from 'components'

import Drawer from '.'

export default {
  component: Drawer,
  title: 'Overlay/Drawer/Default',
  argTypes: {
    children: {
      name: 'children',
      table: {
        type: {
          summary: 'ReactElement'
        }
      }
    }
  }
}

export const Default = (args) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button variant="solid" onClick={onOpen}>
        Abrir Drawer
      </Button>
      <Drawer isOpen={isOpen} {...args}>
        <DrawerContent>
          <DrawerCloseButton onClick={onClose} />
          <DrawerHeader>
            <Heading>Sou um Heading</Heading>
          </DrawerHeader>

          <DrawerBody>
            <Input />
          </DrawerBody>

          <DrawerFooter>
            <Button onClick={onClose}>Fechar</Button>
            <Button variant="solid">Salvar</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
