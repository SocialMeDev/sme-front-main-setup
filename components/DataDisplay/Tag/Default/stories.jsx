import {
  Stack,
  TagCloseButton,
  TagLabel,
  TagLeftIcon,
  TagRightIcon
} from 'components'

import { AttachmentLink, Bell } from 'components/Icons/Interface'

import Tag from '.'

export default {
  component: Tag,
  title: 'DataDisplay/Tag/Default',
  args: {
    variant: 'solid',
    colorScheme: 'primary',
    size: 'md'
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
    variant: {
      options: ['solid', 'ghost', 'outline'],
      control: { type: 'radio' },
      name: 'variant',
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

export const Default = (args) => {
  return (
    <Stack width="max-content">
      <Tag {...args}>Tag</Tag>

      <Tag {...args}>
        <TagLeftIcon as={Bell} />
        <TagLabel>TagLabel</TagLabel>

        <TagCloseButton />
      </Tag>

      <Tag {...args}>
        <TagLabel>TagLabel</TagLabel>
        <TagRightIcon as={AttachmentLink} />
        <TagCloseButton />
      </Tag>
    </Stack>
  )
}
