import Avatar from '.'

export default {
  component: Avatar,
  title: 'Atoms/Avatar/Basic/_1',
  args: {
    src: 'https://randomuser.me/api/portraits/men/32.jpg',
    size: 'md'
  },
  argTypes: {
    src: {
      name: 'src',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    size: {
      options: ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', 'full'],
      control: { type: 'radio' },
      table: {
        type: {
          summary: 'string'
        }
      }
    }
  }
}

export const Common = (args) => <Avatar {...args} />
