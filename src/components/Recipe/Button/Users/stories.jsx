import UsersButton from '.'

export default {
  component: UsersButton,
  title: 'Recipe/Button/Users',
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

export const Button = (args) => {
  return <UsersButton {...args}>Usuários</UsersButton>
}

export const Icon = (args) => {
  return <UsersButton {...args} />
}
