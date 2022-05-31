import { ListItem } from 'components'

import List from '.'

export default {
  component: List,
  title: 'DataDisplay/List/Default',
  args: {
    spacing: 4
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
    children: {
      name: 'children',
      table: {
        type: {
          summary: 'ReactElement'
        }
      }
    }
  }
}

export const Default = (args) => (
  <List {...args}>
    <ListItem>Olá, eu sou um ListItem</ListItem>
    <ListItem>Eae, sou outro ListItem</ListItem>
    <ListItem>Sem criatividade para escrever outra descrição</ListItem>
    <ListItem>Aqui seria o ultimo ListItem</ListItem>
  </List>
)
