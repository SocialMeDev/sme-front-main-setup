import JudgmentButton from '.'

export default {
  component: JudgmentButton,
  title: 'Recipe/Button/Judgment',
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
  return <JudgmentButton {...args}>Julgamento</JudgmentButton>
}

export const Icon = (args) => {
  return (
    <JudgmentButton
      aria-label="Demostração do botão de julgamento padronizado"
      {...args}
    />
  )
}
