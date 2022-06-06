import UploadImageList from '.'

export default {
  component: UploadImageList,
  title: 'Forms/Upload/ImageList',
  args: {
    size: '125px',
    isDeletable: true,
    isModified: true,
    label: 'Nova imagem',
    defaultImages: ['https://randomuser.me/api/portraits/men/32.jpg'],
    onChange: (image) => {
      console.log(`onChange image`, image)
    },
    onDelete: (image) => {
      console.log(`onDelete image`, image)
    }
  },
  argTypes: {
    isDeletable: {
      name: 'isDeletable',
      table: {
        type: {
          summary: 'boolean'
        }
      }
    },
    isModified: {
      name: 'isModified',
      table: {
        type: {
          summary: 'boolean'
        }
      }
    },
    size: {
      name: 'size',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    defaultImages: {
      name: 'defaultImages',
      table: {
        type: {
          summary: 'string[]'
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
    }
  }
}

export const Default = (args) => {
  return <UploadImageList {...args} />
}
