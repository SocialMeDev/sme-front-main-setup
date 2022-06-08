import RefuseButton from '.'

export default {
  component: RefuseButton,
  title: 'Recipe/Button/Refuse',
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
  return <RefuseButton {...args}>Recusar</RefuseButton>
}

export const Icon = (args) => {
  return (
    <RefuseButton
      aria-label="Demostração do botão de recusar padronizado"
      {...args}
    />
  )
}
