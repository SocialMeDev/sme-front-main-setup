import { Text } from 'components'

import Center from '.'

export default {
  component: Center,
  title: 'Layout/Center/Default',
  args: {
    gap: 2
  },
  argTypes: {
    gap: {
      name: 'gap',
      table: {
        type: {
          summary: 'number'
        }
      }
    }
  }
}

export const Default = (args) => {
  return (
    <Center
      h="100px"
      w="75%"
      p={4}
      borderWidth="1px"
      borderColor="borderColor"
      rounded="md"
      {...args}
    >
      <Text>Wooooooooooohhhh</Text>
      <Text>aaaaaaaaaaah</Text>
      <Text>Woah!</Text>
    </Center>
  )
}
