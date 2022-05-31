import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Heading,
  Button
} from '@chakra-ui/react'
import CustomDrawerFooter from '.'

export default {
  component: CustomDrawerFooter,
  title: 'Atoms/Drawer/Footer/_1',
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

export const Common = (args) => (
  <Drawer isOpen={true}>
    <DrawerContent>
      <DrawerHeader>
        <Heading>Header</Heading>
      </DrawerHeader>
      <DrawerBody>Teste</DrawerBody>
      <CustomDrawerFooter {...args}>
        <Button>Fechar</Button>
        <Button variant="solid">Confirmar</Button>
      </CustomDrawerFooter>
    </DrawerContent>
  </Drawer>
)
