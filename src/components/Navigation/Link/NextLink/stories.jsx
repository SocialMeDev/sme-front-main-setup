import { Center, Text } from 'components'

import NextLink from '.'

export default {
  component: NextLink,
  title: 'Navigation/Link/NextLink',
  args: {
    href: '/my-url',
    target: '_self'
  },
  argTypes: {
    target: {
      values: ['_self', '_blank'],
      control: { type: 'radio' },
      name: 'target',
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
  return (
    <NextLink {...args}>
      <Center color="light" p={6} w="250px" h="250px" bg="primary">
        <Text>Este conteúdo é um Link</Text>
      </Center>
    </NextLink>
  )
}
