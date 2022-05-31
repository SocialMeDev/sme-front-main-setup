import Card from '.'

export default {
  component: Card,
  title: 'Atoms/Card/Basic/_2',
  args: {
    tapeLabel: 'Fita',
    tapeBg: '#63BCED',
    tapeColor: 'lightColor'
  },
  argTypes: {
    children: {
      name: 'children',
      table: {
        type: {
          summary: 'ReactElement'
        }
      }
    },
    tapeBg: {
      name: 'tapeBg',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    tapeColor: {
      name: 'tapeColor',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    tapeLabel: {
      name: 'tapeLabel',
      table: {
        type: {
          summary: 'string'
        }
      }
    }
  }
}

export const Common = (args) => <Card h="250px" bg="blue.300" {...args} />
