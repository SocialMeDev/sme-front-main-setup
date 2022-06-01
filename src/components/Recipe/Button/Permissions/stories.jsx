import PermissionsButton from '.'

export default {
  component: PermissionsButton,
  title: 'Recipe/Button/Permissions',
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
  return <PermissionsButton {...args}>Permissões</PermissionsButton>
}

export const Icon = (args) => {
  return <PermissionsButton {...args} />
}
