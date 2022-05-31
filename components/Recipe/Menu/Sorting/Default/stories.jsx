import SortingMenu from '.'

export default {
  component: SortingMenu,
  title: 'Recipe/Menu/Sorting/Default',
  args: {
    options: [
      {
        name: 'Ordem alfabética',
        sort: {
          by: 'name',
          order: 'ASC'
        }
      },
      {
        name: 'Mais recentes',
        sort: {
          by: 'created_at',
          order: 'DESC '
        }
      },
      {
        name: 'Mais antigos',
        sort: {
          by: 'created_at',
          order: 'ASC'
        }
      }
    ],
    defaultName: 'Ordem alfabética',
    onChange: (value) => {
      console.log(`value`, value)
    }
  },
  argTypes: {
    defaultName: {
      name: 'defaultName',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    buttonText: {
      name: 'buttonText',
      table: {
        type: {
          summary: 'string'
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
  return <SortingMenu {...args} />
}
