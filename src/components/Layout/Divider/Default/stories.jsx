import { Box } from 'components'

import Divider from '.'

export default {
  component: Divider,
  title: 'Layout/Divider/Default',
  args: {
    orientation: 'horizontal',
    variant: 'solid',
    spacing: 2
  },
  argTypes: {
    orientation: {
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' },
      name: 'orientation',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    variant: {
      options: ['solid', 'dashed'],
      control: { type: 'radio' },
      name: 'variant',
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
    <Box h="200px">
      <Divider {...args} />
    </Box>
  )
}

export const WithText = (args) => {
  return (
    <Box h="200px">
      <Divider text="Divisor" {...args}>
        Texto
      </Divider>
    </Box>
  )
}
