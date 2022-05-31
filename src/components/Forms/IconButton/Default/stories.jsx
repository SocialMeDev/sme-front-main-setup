import { Eye5 } from 'components/Icons/Interface'

import IconButton from '.'

export default {
  component: IconButton,
  title: 'Forms/IconButton/Default',
  args: {
    'aria-label': 'Acessibilidade do botão',
    variant: 'solid',
    colorScheme: 'primary'
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
    colorScheme: {
      name: 'colorScheme',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    'aria-label': {
      name: 'aria-label',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    icon: {
      name: 'icon',
      table: {
        type: {
          summary: 'ReactComponent'
        }
      }
    },
    variant: {
      options: ['solid', 'outline', 'ghost'],
      control: { type: 'radio' },
      name: 'variant',
      table: {
        type: {
          summary: 'string'
        }
      }
    }
  }
}

export const Default = (args) => {
  return <IconButton icon={<Eye5 />} {...args} />
}
