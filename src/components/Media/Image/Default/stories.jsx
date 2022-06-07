import Image from '.'

export default {
  component: Image,
  title: 'Media/Image/Default',
  args: {
    src: 'https://randomuser.me/api/portraits/men/32.jpg',
    fallbackSrc: 'https://randomuser.me/api/portraits/men/32.jpg',
    alt: 'Uma imagem nos storybook'
  },
  argTypes: {
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
    fallbackSrc: {
      name: 'fallbackSrc',
      table: {
        type: {
          summary: 'string'
        }
      }
    }
  }
}

export const Default = (args) => <Image {...args} />
