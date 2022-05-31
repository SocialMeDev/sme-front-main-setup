import TagsGroup from '.'

export default {
  component: TagsGroup,
  title: 'Atoms/TagsGroup/Basic/_1',
  args: {
    emptyText: 'Não há nenhuma tag'
  },
  argTypes: {
    onRemoveTag: {
      table: {
        type: {
          summary: '(tagValue: string) => void'
        }
      }
    },
    emptyText: {
      name: 'emptyText',
      table: {
        type: {
          summary: 'string'
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

export const Common = (args) => {
  return <TagsGroup onRemoveTag={() => {}} {...args} />
}
