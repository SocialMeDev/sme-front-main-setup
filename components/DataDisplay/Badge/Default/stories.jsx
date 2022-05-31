import Badge from '.'

export default {
  component: Badge,
  title: 'DataDisplay/Badge/Default',
  args: {
    variant: 'ghost',
    colorScheme: 'green',
    size: 'md'
  },
  argTypes: {
    variant: {
      options: ['solid', 'ghost', 'outline'],
      control: { type: 'radio' },
      name: 'variant',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    colorScheme: {
      name: 'colorScheme',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
      name: 'size',
      table: {
        type: {
          summary: 'string'
        }
      }
    }
  }
}

export const Default = (args) => <Badge {...args}>Badge</Badge>
