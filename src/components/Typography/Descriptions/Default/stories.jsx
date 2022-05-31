import Descriptions from '.'

export default {
  component: Descriptions,
  title: 'Typography/Descriptions/Horizontal',
  args: {
    spacing: 0,
    data: {
      ID: 1,
      Name: 'Jonh Dom',
      Idade: 23,
      'Data de nascimento': '10/11/2021'
    }
  },
  argTypes: {
    spacing: {
      name: 'spacing',
      table: {
        type: {
          summary: 'number'
        }
      }
    },
    data: {
      name: 'data',
      table: {
        type: {
          summary: 'string'
        }
      }
    }
  }
}

export const Default = (args) => {
  return <Descriptions {...args} />
}
