import { patternEmail } from 'utils/patterns'

import InputTag from '.'

export default {
  component: InputTag,
  title: 'Forms/InputTag/Default',
  args: {
    variant: 'solid',
    defaultValues: ['Agora', 'TagLabel'],
    onChange: (tags) => {
      console.log(`Tags`, tags)
    },
    validate: (value) => {
      return patternEmail.test(value)
    }
  },
  argTypes: {
    validate: {
      name: 'validate',
      table: {
        type: {
          summary: '(tagValue) => boolean'
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
      options: ['outline', 'solid', 'ghost'],
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
    }
  }
}

export const Default = (args) => {
  return <InputTag {...args} />
}
