import { Center, Button } from 'components'
import Result from '.'

export default {
  component: Result,
  title: 'Feedback/Result/Default',
  args: {
    type: 'success',
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
    type: {
      options: ['success', 'danger', 'info', 'warning'],
      control: { type: 'radio' },
      name: 'type',
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

export const Default = (args) => <Result {...args} />

export const WithButtons = (args) => (
  <Result {...args}>
    <Center gap={4}>
      <Button colorScheme="blue">Voltar</Button>
      <Button colorScheme="blue" variant="solid">
        Criar um novo
      </Button>
    </Center>
  </Result>
)
