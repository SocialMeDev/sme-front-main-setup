import { patternEmail } from 'utils/patterns'

import InputTag from '.'

export default {
  component: InputTag,
  title: 'Forms/InputTag/Default',
  args: {
    id: 'name',
    label: 'Notificações',
    variant: 'outline',
    defaultValues: ['Agora', 'TagLabel'],
    onChange: (tags) => {
      console.log(`Tags`, tags)
    },
    validate: (value) => {
      return patternEmail.test(value)
    }
  },
  argTypes: {
    pattern: {
      name: 'pattern',
      table: {
        type: {
          summary: 'Regexp'
        }
      }
    },
    onChange: {
      name: 'onChange',
      table: {
        type: {
          summary: '(string[]) => void'
        }
      }
    },
    variant: {
      options: ['outline', 'filled', 'flushed'],
      control: { type: 'radio' },
      name: 'variant',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    size: {
      options: ['xs', 'sm', 'md'],
      control: { type: 'radio' },
      name: 'size',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    defaultValues: {
      name: 'defaultValues',
      table: {
        type: {
          summary: 'string[]'
        }
      }
    },
    label: {
      name: 'label',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    id: {
      name: 'id',
      table: {
        type: {
          summary: 'string'
        }
      }
    }
  }
}

export const Default = (args) => {
  return <InputTag {...args} />
}
