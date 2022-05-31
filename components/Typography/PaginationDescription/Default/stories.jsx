import Span from '.'

export default {
  component: Span,
  title: 'Typography/Span/Default',
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
  return <Span {...args}>Olá, eu sou um span</Span>
}
