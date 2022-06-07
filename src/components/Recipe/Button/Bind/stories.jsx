import BindButton from '.'

export default {
  component: BindButton,
  title: 'Recipe/Button/Bind',
  args: {
    variant: 'outline',
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

export const Button = (args) => {
  return <BindButton {...args}>Vincular</BindButton>
}

export const Icon = (args) => {
  return (
    <BindButton
      aria-label="Demostração do botão de vincular padronizado"
      {...args}
    />
  )
}
