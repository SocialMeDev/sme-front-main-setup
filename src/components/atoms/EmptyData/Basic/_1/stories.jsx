import EmptyData from '.'

import EmptyBox from './assets/empty-box.json'

export default {
  component: EmptyData,
  title: 'Atoms/EmptyData/Basic/_1',
  args: {
    src: EmptyBox,
    title: 'Sem informações',
    description: 'Não foi cadastrado nenhuma informações neste tabela de dados'
  },
  argTypes: {
    src: {
      name: 'src',
      table: {
        type: {
          summary: 'LottieFile'
        }
      }
    },
    title: {
      name: 'title',
      control: {
        type: 'text'
      },
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    description: {
      name: 'description',
      control: {
        type: 'text'
      },
      table: {
        type: {
          summary: 'string'
        }
      }
    }
  }
}

export const Common = (args) => <EmptyData {...args} />
