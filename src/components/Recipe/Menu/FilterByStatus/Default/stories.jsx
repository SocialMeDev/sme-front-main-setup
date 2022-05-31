import FilterByStatusMenu from '.'

export default {
  component: FilterByStatusMenu,
  title: 'Recipe/Menu/FilterByStatus/Default',
  args: {
    options: [
      {
        label: 'Todos',
        value: '',
        color: ''
      },
      {
        label: 'Ativos',
        value: 'ACTIVE',
        color: 'success'
      },
      {
        label: 'Inativos',
        value: 'INACTIVE',
        color: 'danger'
      },
      {
        label: 'Processos',
        value: 'INFO',
        color: 'info'
      },
      {
        label: 'Alerta',
        value: 'WARNING',
        color: 'warning'
      }
    ],
    defaultStatus: {
      label: 'Todos',
      color: ''
    },
    onChange: (value) => {
      console.log(`value`, value)
    }
  },
  argTypes: {
    defaultStatus: {
      name: 'defaultStatus',
      table: {
        type: {
          summary: '{ label: string, color: string }'
        }
      }
    },
    onChange: {
      name: 'onChange',
      table: {
        type: {
          summary: '(value) => void'
        }
      }
    }
  }
}

export const Default = (args) => {
  return <FilterByStatusMenu {...args} />
}
