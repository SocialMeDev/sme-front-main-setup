import UploadImage from '.'

export default {
  component: UploadImage,
  title: 'Forms/Upload/Image',
  args: {
    onUpdate: (file) => {
      console.log(`Updating file...`, file)
    },
    onDelete: (file) => {
      console.log(`Deleting file...`, file)
    },
    onUpload: (file) => {
      console.log(`Uploading file...`, file)
    },
    isLoading: false,
    label: 'Anexar foto',
    rounded: 'md',
    defaultImages: [],
    defaultMainImage:
      'https://sme-dataworld.s3.amazonaws.com/prsn/1000000/prsn-avtr/8hh34W1lp8AuI_md.jpg'
  },
  argTypes: {
    size: {
      name: 'size',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    defaultMainImage: {
      name: 'defaultMainImage',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    isLoading: {
      name: 'isLoading',
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
    rounded: {
      options: ['md', 'full'],
      control: { type: 'radio' },
      name: 'rounded',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    onUpload: {
      name: 'onUpload',
      table: {
        type: {
          summary: '(file: File) => void'
        }
      }
    },
    onUpdate: {
      name: 'onUpdate',
      table: {
        type: {
          summary: '(avatarId: string) => void'
        }
      }
    },
    onDelete: {
      name: 'onDelete',
      table: {
        type: {
          summary: '(avatarId: string) => void'
        }
      }
    }
  }
}

export const Default = (args) => {
  return <UploadImage {...args} />
}
