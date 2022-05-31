import Badge from '.'

export default {
  component: Badge,
  title: 'DataDisplay/Badge/Dot',
  args: {
    status: 'success',
    fontSize: 'Positivo',
    color: 'dark',
    text: 'positivo',
    size: 'md'
  },
  argTypes: {
    status: {
      options: ['success', 'danger', 'info', 'success'],
      control: { type: 'radio' },
      name: 'status',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    color: {
      name: 'color',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    fontSize: {
      name: 'fontSize',
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
    },
    text: {
      name: 'text',
      table: {
        type: {
          summary: 'string'
        }
      }
    }
  }
}

export const Dot = (args) => <Badge {...args}>Badge</Badge>
