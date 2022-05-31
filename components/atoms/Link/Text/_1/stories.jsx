import TextLink from '.'

export default {
  component: TextLink,
  title: 'Atoms/Link/Text/_1',
  args: {
    href: '#',
    target: '_blank',
    text: 'um link no texto'
  },
  argTypes: {
    href: {
      name: 'href',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    target: {
      name: 'target',
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

export const Common = (args) => <TextLink {...args} />
