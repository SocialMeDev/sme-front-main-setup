import Link from '.'

export default {
  component: Link,
  title: 'Navigation/Link/Default',
  args: {
    href: '/my-url',
    target: '_self'
  },
  argTypes: {
    target: {
      values: ['_self', '_blank'],
      name: 'target',
      control: { type: 'radio' },
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    href: {
      name: 'href',
      table: {
        type: {
          summary: 'string'
        }
      }
    }
  }
}

export const Default = (args) => {
  return <Link {...args}>Olá, eu sou um link</Link>
}
