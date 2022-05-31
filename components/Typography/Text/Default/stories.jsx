import Text from '.'

export default {
  component: Text,
  title: 'Typography/Text/Default',
  args: {
    fontSize: 'sm'
  },
  argTypes: {
    fontSize: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
      name: 'fontSize',
      table: {
        type: {
          summary: 'string'
        }
      }
    }
  }
}

export const Default = (args) => {
  return <Text {...args}>Texto</Text>
}
