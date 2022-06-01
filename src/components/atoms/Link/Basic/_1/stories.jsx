import { Box } from '@chakra-ui/react'
import Link from '.'

export default {
  component: Link,
  title: 'Atoms/Link/Basic/_1',
  argTypes: {
    href: {
      name: 'href',
      defaultValue: '/my-page',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    target: {
      name: 'target',
      defaultValue: '_blank',
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

export const Common = (args) => (
  <Link {...args}>
    <Box p={2}>Link</Box>
  </Link>
)
