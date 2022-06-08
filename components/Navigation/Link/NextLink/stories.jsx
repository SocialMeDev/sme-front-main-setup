import { Center, Text } from 'components'

import NextLink from '.'

export default {
  component: NextLink,
  title: 'Navigation/Link/NextLink',
  args: {
    download: false,
    href: '/my-url',
    target: '_blank'
  },
  argTypes: {
    target: {
      options: ['_self', '_blank'],
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
    },
    download: {
      name: 'download',
      table: {
        type: {
          summary: 'boolean'
        }
      }
    }
  }
}

export const Default = (args) => {
  return (
    <NextLink display="inline-block" {...args}>
      <Center color="light" p={6} w="250px" h="250px" bg="primary">
        <Text>Este conteúdo é um Link</Text>
      </Center>
    </NextLink>
  )
}
