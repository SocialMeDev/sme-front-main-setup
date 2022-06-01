import {
  Heading,
  Text,
  Button,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverCloseButton,
  PopoverTrigger,
  PopoverArrow
} from 'components'

import Popover from '.'

export default {
  component: Popover,
  title: 'Overlay/Popover/Default',
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
  return (
    <Popover {...args}>
      <PopoverTrigger>
        <Button variant="solid">Abrir Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>
          <Heading>Header do Popover</Heading>
        </PopoverHeader>
        <PopoverBody>
          <Text>Estou abrindo o conteúdo de um Popohver</Text>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
