import Radio from '.'

export default {
  component: Radio,
  title: 'Forms/Radio/Default',
  args: {
    type: 'text',
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
      name: 'size',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    name: {
      name: 'name',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    onChange: {
      name: 'onChange',
      table: {
        type: {
          summary: '(value) => void'
        }
      }
    }
  }
}

export const Default = (args) => {
  return <Radio {...args}>Radio</Radio>
}
