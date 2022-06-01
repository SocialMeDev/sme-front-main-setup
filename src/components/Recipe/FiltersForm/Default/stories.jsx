import { Button } from 'components'
import { cpfMask } from 'utils/masks'

import FiltersForm from '.'

export default {
  component: FiltersForm,
  title: 'Recipe/FiltersForm/Default',
  args: {
    fields: [
      {
        type: 'input',
        name: 'name',
        label: 'Nome',
        value: 'Jose',
        helperText: 'Nome completo'
      },
      {
        type: 'maskInput',
        name: 'cpf_number',
        label: 'CPF',
        mask: cpfMask
      },
      {
        type: 'select',
        name: 'fruit',
        label: 'Fruta',
        value: 'B',
        options: [
          { label: 'Todos', value: '' },
          { label: 'Banana', value: 'B' },
          { label: 'Maça', value: 'M' },
          { label: 'Acerola', value: 'A' }
        ]
      }
    ],
    buttonProps: {
      variant: 'solid',
      colorScheme: 'primary'
    },
    overlayType: 'Drawer',
    submitButtonText: 'Filtrar',
    title: 'Filtrando usuários no sistema',
    subTitle: 'Pessoas físicas',
    filters: {},
    initialFilters: {},
    onSubmit: (values) => {
      console.log('Pesquisando...', values)
    }
  },
  argTypes: {
    overlayType: {
      name: 'overlayType',
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
    subTitle: {
      name: 'subTitle',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    fields: {
      name: 'fields',
      table: {
        type: {
          summary: '[{ name: string: sort: { by: string, order: ASC | DESC }}]'
        }
      }
    },
    onSubmit: {
      name: 'onSubmit',
      table: {
        type: {
          summary: '(filters) => void'
        }
      }
    }
  }
}

export const Default = (args) => {
  return (
    <FiltersForm {...args}>
      <Button variant="solid">Abrir</Button>
    </FiltersForm>
  )
}
