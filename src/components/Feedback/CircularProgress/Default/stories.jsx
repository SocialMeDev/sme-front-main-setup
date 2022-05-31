import { CircularProgressLabel } from 'components'

import CircularProgress from '.'

export default {
  component: CircularProgress,
  title: 'Feedback/CircularProgress/Default',
  args: {
    valueText: 'Label',
    value: 50,
    thickness: '0.5rem',
    max: 100,
    min: 0,
    hasStripe: false,
    isIndeterminate: false,
    colorScheme: 'primary',
    trackColor: 'gray.100'
  },
  argTypes: {
    max: {
      name: 'max',
      table: {
        type: {
          summary: 'number'
        }
      }
    },
    min: {
      name: 'min',
      table: {
        type: {
          summary: 'number'
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
    thickness: {
      name: 'thickness',
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
    isIndeterminate: {
      name: 'isIndeterminate',
      table: {
        type: {
          summary: 'boolean'
        }
      }
    },
    trackColor: {
      name: 'trackColor',
      table: {
        type: {
          summary: 'string'
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
    },
    valueText: {
      name: 'valueText',
      table: {
        type: {
          summary: 'string'
        }
      }
    }
  }
}

export const Default = (args) => <CircularProgress {...args} />

export const WithText = (args) => (
  <CircularProgress {...args}>
    <CircularProgressLabel>{args.value}</CircularProgressLabel>
  </CircularProgress>
)
