import Tooltip from '.'

export default {
  component: Tooltip,
  title: 'Overlay/Tooltip/Default',
  args: {
    hasArrow: true,
    label: 'Olá, sou o texto do Tooltip',
    placement: 'top'
  },
  argTypes: {
    hasArrow: {
      name: 'hasArrow',
      table: {
        type: {
          summary: 'boolean'
        }
      }
    },
    label: {
      name: 'label',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    placement: {
      options: [
        'top-start',
        'top',
        'top-end',
        'auto',
        'right',
        'left',
        'bottom'
      ],
      control: { type: 'radio' },
      name: 'placement',
      table: {
        type: {
          summary: 'string'
        }
      }
    }
  }
}

export const Default = (args) => {
  return <Tooltip {...args}>Passe o mouse em mim</Tooltip>
}
