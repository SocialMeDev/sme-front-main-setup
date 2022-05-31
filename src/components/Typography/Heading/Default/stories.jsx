import Heading from '.'

export default {
  component: Heading,
  title: 'Typography/Heading/Default',
  args: {
    fontSize: 'xl'
  },
  argTypes: {
    fontSize: {
      options: ['md', 'lg', 'xl'],
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
  return <Heading {...args}>Títulos</Heading>
}
