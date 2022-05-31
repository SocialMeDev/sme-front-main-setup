import Avatar from '.'

export default {
  component: Avatar,
  title: 'Media/Avatar/Default',
  args: {
    src: 'https://randomuser.me/api/portraits/men/32.jpg',
    alt: 'Uma Avatar nos storybook',
    name: 'José Vitor',
    avatarUrlSize: 'md'
  },
  argTypes: {
    name: {
      name: 'name',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    alt: {
      name: 'alt',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    src: {
      name: 'src',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    avatarUrlSize: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      name: 'avatarUrlSize',
      control: { type: 'radio' },
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      name: 'size',
      control: { type: 'radio' },
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    children: {
      name: 'children',
      table: {
        type: {
          summary: 'ReactElement'
        }
      }
    }
  }
}

export const Default = (args) => <Avatar {...args} />
