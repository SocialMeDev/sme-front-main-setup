import AcceptButton from '.'

export default {
  component: AcceptButton,
  title: 'Recipe/Button/Accept',
  args: {
    variant: 'ghost',
    colorScheme: 'primary'
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
  return <AcceptButton {...args}>Confirmar botão</AcceptButton>
}

export const Icon = (args) => {
  return <AcceptButton {...args} />
}
