import TagsCell from '.'

export default {
  component: TagsCell,
  title: 'Atoms/TagsGroup/Basic/_2',
  args: {
    emptyText: 'Não há nenhuma tag',
    totalTagsToShow: 2,
    tags: [
      {
        label: 'Teal',
        value: 'Teal'
      },
      {
        label: 'Blue',
        value: 'Blue'
      },
      {
        label: 'Gray',
        value: 'Gray'
      },
      {
        label: 'Red',
        value: 'Red'
      },
      {
        label: 'Pink',
        value: 'Pink'
      }
    ]
  },
  argTypes: {
    totalTagsToShow: {
      name: 'totalTagsToShow',
      control: {
        type: 'number'
      },
      table: {
        type: {
          summary: 'Number'
        }
      }
    },
    tags: {
      name: 'tags',
      table: {
        type: {
          summary: '[{ label: string, value: string, color?: string }]'
        }
      }
    }
  }
}

export const Common = (args) => <TagsCell {...args} />
