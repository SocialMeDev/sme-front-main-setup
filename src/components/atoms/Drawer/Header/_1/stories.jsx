import { Drawer, DrawerContent } from '@chakra-ui/react'
import CustomDrawerHeader from '.'

export default {
  component: CustomDrawerHeader,
  title: 'Atoms/Drawer/Header/_1',
  args: {
    title: 'Custom Drawer'
  },
  argTypes: {
    title: {
      name: 'title',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    onClose: {
      name: 'onClose',
      table: {
        type: {
          summary: '() => void'
        }
      }
    }
  }
}

export const Basic = (args) => (
  <Drawer isOpen={true}>
    <DrawerContent>
      <CustomDrawerHeader {...args} />
    </DrawerContent>
  </Drawer>
)
