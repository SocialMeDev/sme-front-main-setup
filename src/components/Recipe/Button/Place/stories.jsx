import PlaceButton from '.'

export default {
  component: PlaceButton,
  title: 'Recipe/Button/Place',
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
  return <PlaceButton {...args}>Local</PlaceButton>
}

export const Icon = (args) => {
  return <PlaceButton {...args} />
}
