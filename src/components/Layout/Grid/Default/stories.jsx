import { Box } from 'components'

import Grid from '.'

export default {
  component: Grid,
  title: 'Layout/Grid/Default',
  args: {
    templateColumns: 'repeat(5, 1fr)',
    templateRows: 'repeat(3, 1fr)',
    gap: 2
  },
  argTypes: {
    templateColumns: {
      name: 'templateColumns',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    templateRows: {
      name: 'templateRows',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    gap: {
      name: 'gap',
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
    <Grid
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
    </Grid>
  )
}
