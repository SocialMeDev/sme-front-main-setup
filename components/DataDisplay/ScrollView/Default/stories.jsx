import { Text, Card } from 'components'

import ScrollView from '.'

export default {
  component: ScrollView,
  title: 'DataDisplay/ScrollView/Default',
  args: {
    width: 'auto',
    maxHeight: '200px'
  },
  argTypes: {
    width: {
      name: 'width',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    height: {
      name: 'height',
      table: {
        type: {
          summary: 'string'
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
  <ScrollView {...args}>
    <Card>
      <Text>ScrollView</Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eaque
        distinctio nesciunt vero iste blanditiis modi qui, asperiores, eveniet a
        et saepe, fugiat ducimus sed quasi ut dolorem facere numquam inventore
        reiciendis atque! Est perferendis illum earum exercitationem totam iste
        repellat aperiam ea iure aut quibusdam, ipsa nemo, corporis labore quasi
        id cumque soluta atque perspiciatis vero cum, eveniet laudantium animi
        quas? Maxime a cupiditate laudantium distinctio nesciunt fugit magni?
        Asperiores ab aut molestias necessitatibus ratione eligendi autem
        corrupti. Maxime, iste veritatis? Nihil placeat fugit error delectus.
        Unde facere perspiciatis alias, doloremque quod impedit, inventore
        fugiat sit, pariatur quis laboriosam.
      </Text>

      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eaque
        distinctio nesciunt vero iste blanditiis modi qui, asperiores, eveniet a
        et saepe, fugiat ducimus sed quasi ut dolorem facere numquam inventore
        reiciendis atque! Est perferendis illum earum exercitationem totam iste
        repellat aperiam ea iure aut quibusdam, ipsa nemo, corporis labore quasi
        id cumque soluta atque perspiciatis vero cum, eveniet laudantium animi
        quas? Maxime a cupiditate laudantium distinctio nesciunt fugit magni?
        Asperiores ab aut molestias necessitatibus ratione eligendi autem
        corrupti. Maxime, iste veritatis? Nihil placeat fugit error delectus.
        Unde facere perspiciatis alias, doloremque quod impedit, inventore
        fugiat sit, pariatur quis laboriosam.
      </Text>

      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eaque
        distinctio nesciunt vero iste blanditiis modi qui, asperiores, eveniet a
        et saepe, fugiat ducimus sed quasi ut dolorem facere numquam inventore
        reiciendis atque! Est perferendis illum earum exercitationem totam iste
        repellat aperiam ea iure aut quibusdam, ipsa nemo, corporis labore quasi
        id cumque soluta atque perspiciatis vero cum, eveniet laudantium animi
        quas? Maxime a cupiditate laudantium distinctio nesciunt fugit magni?
        Asperiores ab aut molestias necessitatibus ratione eligendi autem
        corrupti. Maxime, iste veritatis? Nihil placeat fugit error delectus.
        Unde facere perspiciatis alias, doloremque quod impedit, inventore
        fugiat sit, pariatur quis laboriosam.
      </Text>
    </Card>
  </ScrollView>
)
