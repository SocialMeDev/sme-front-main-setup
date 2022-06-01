import Badge from '.'

export default {
  component: Badge,
  title: 'Atoms/Badge/Basic/_1',
  args: {
    text: 'Label',
    circleSize: '0.5rem',
    type: 'error',
    circleColor: ''
  },
  argTypes: {
    text: {
      name: 'text',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    circleSize: {
      name: 'circleSize',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    type: {
      name: 'type',
      options: ['success', 'error', 'info', 'warning'],
      control: { type: 'radio' },
      table: {
        type: {
          summary: 'string'
        }
      }
    }
  }
}

export const Basic = (args) => {
  console.log(`args`, args)
  return <Badge {...args} />
}
