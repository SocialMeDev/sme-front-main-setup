import ModalInfo from '.'

import { Text } from 'components'

export default {
  component: ModalInfo,
  title: 'Recipe/Modal/Info',
  args: {
    color: 'dark',
    title: 'Título',
    info: 'Informação'
  },
  argTypes: {
    color: {
      name: 'color',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    title: {
      name: 'title',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    info: {
      name: 'info',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    direction: {
      name: 'direction',
      table: {
        type: {
          summary: 'string'
        }
      }
    }
  }
}

export const Info = (args) => {
  return (
    <ModalInfo {...args}>
      <Text>Children</Text>
    </ModalInfo>
  )
}
