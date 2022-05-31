import Progress from '.'

export default {
  component: Progress,
  title: 'Feedback/Progress/Default',
  args: {
    value: 50,
    isAnimated: true,
    hasStripe: true,
    isIndeterminate: true,
    colorScheme: 'primary',
    size: 'sm'
  },
  argTypes: {
    colorScheme: {
      name: 'colorScheme',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: { type: 'radio' },
      name: 'size',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    hasStripe: {
      name: 'hasStripe',
      table: {
        type: {
          summary: 'boolean'
        }
      }
    },
    isAnimated: {
      name: 'isAnimated',
      table: {
        type: {
          summary: 'boolean'
        }
      }
    },
    isIndeterminate: {
      name: 'isIndeterminate',
      table: {
        type: {
          summary: 'boolean'
        }
      }
    },
    value: {
      name: 'value',
      table: {
        type: {
          summary: 'number'
        }
      }
    }
  }
}

export const Default = (args) => <Progress {...args} />
