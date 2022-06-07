import UnbindButton from '.'

export default {
  component: UnbindButton,
  title: 'Recipe/Button/Unbind',
  args: {
    variant: 'outline',
    colorScheme: 'red'
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
  return <UnbindButton {...args}>Desvincular</UnbindButton>
}

export const Icon = (args) => {
  return (
    <UnbindButton
      aria-label="Demostração do botão de desvincular padronizado"
      {...args}
    />
  )
}
