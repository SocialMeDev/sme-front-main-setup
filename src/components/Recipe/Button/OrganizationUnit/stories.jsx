import OrganizationUnitButton from '.'

export default {
  component: OrganizationUnitButton,
  title: 'Recipe/Button/OrganizationUnit',
  args: {
    variant: 'ghost',
    colorScheme: 'gray'
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
  return (
    <OrganizationUnitButton {...args}>Confirmar botão</OrganizationUnitButton>
  )
}
