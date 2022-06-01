import EmptyData from '.'

import EmptyBoxAnimation from './files/empty-box.json'

export default {
  component: EmptyData,
  title: 'Feedback/EmptyData/Default',
  args: {
    src: EmptyBoxAnimation,
    title: 'Sem informações',
    description: 'Não foi cadastrado nenhuma informações neste tabela de dados'
  },
  argTypes: {
    children: {
      name: 'children',
      table: {
        type: {
          summary: 'ReactElement'
        }
      }
    },
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
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    description: {
      name: 'description',
      table: {
        type: {
          summary: 'string'
        }
      }
    }
  }
}

export const Default = (args) => <EmptyData {...args} />
