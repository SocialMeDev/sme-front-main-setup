import DeleteButton from '.'

export default {
  component: DeleteButton,
  title: 'Recipe/Button/Delete',
  args: {
    variant: 'solid',
    colorScheme: 'red',
    title: 'Você tem certeza disso?',
    text: 'Você realmente quer deletar  este registro?',
    description: 'Você não poderá voltar atrás',
    cancelButtonText: 'Cancelar',
    submitButtonText: 'Sim, tenho certeza',
    modalLogic: true
  },
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md'],
      control: { type: 'radio' },
      name: 'size',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    colorScheme: {
      name: 'colorScheme',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    variant: {
      options: ['solid', 'outline', 'ghost'],
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
  return <DeleteButton {...args}>Deletar</DeleteButton>
}

export const Icon = (args) => {
  return <DeleteButton {...args} />
}
