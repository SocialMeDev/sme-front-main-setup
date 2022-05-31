import { Box } from 'components'

import SimpleGrid from '.'

export default {
  component: SimpleGrid,
  title: 'Layout/SimpleGrid/Default',
  args: {
    columns: 5,
    rows: 5,
    spacing: 4
  },
  argTypes: {
    columns: {
      name: 'columns',
      table: {
        type: {
          summary: 'number'
        }
      }
    },
    rows: {
      name: 'rows',
      table: {
        type: {
          summary: 'number'
        }
      }
    },
    spacing: {
      name: 'spacing',
      table: {
        type: {
          summary: 'number'
        }
      }
    }
  }
}

export const Default = (args) => {
  return (
    <SimpleGrid
      minH="100px"
      w="75%"
      p={4}
      borderWidth="1px"
      borderColor="borderColor"
      rounded="md"
      {...args}
    >
      <Box bg="primary" />
      <Box bg="primary" />
      <Box bg="primary" />
      <Box bg="primary" />
      <Box bg="primary" />
    </SimpleGrid>
  )
}
