import { useState } from 'react'
import { FormControl, FormLabel, Box, Text } from 'components'

import Search from '.'

export default {
  component: Search,
  title: 'Forms/Search/Default',
  args: {
    id: 'search',
    type: 'text',
    size: 'sm'
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
    id: {
      name: 'id',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    onSearch: {
      name: 'onSearch',
      table: {
        type: {
          summary: '(value: string) => void'
        }
      }
    }
  }
}

export const Common = (args) => {
  const [filter, setFilter] = useState('')

  return (
    <Box>
      <FormControl>
        <FormLabel htmlFor={args.id}>
          <Search {...args} onSearch={(value) => setFilter(value)} />
        </FormLabel>
      </FormControl>

      <Text fontSize="md">Search: {filter}</Text>
    </Box>
  )
}
