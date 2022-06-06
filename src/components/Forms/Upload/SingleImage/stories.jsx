import UploadImage from '.'

export default {
  component: UploadImage,
  title: 'Forms/Upload/Image',
  args: {
    cropProps: {
      title: 'Recortando imagem',
      size: '150px'
    },
    galleryProps: {
      title: 'Galeria de imagens',
      defaultImages: [],
      onUpload: (file) => {
        console.log(`Uploading file...`, file)
      }
    },
    onUpload: (file) => {
      console.log(`Uploading file...`, file)
    },
    size: '125px',
    label: 'Anexar foto',
    defaultImage:
      'https://sme-dataworld.s3.amazonaws.com/prsn/1000000/prsn-avtr/8hh34W1lp8AuI_md.jpg'
  },
  argTypes: {
    galleryProps: {
      name: 'galleryProps',
      table: {
        type: {
          summary: 'props}'
        }
      }
    },
    cropProps: {
      name: 'cropProps',
      table: {
        type: {
          summary: 'props}'
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
    defaultImage: {
      name: 'defaultImage',
      table: {
        type: {
          summary: 'string'
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
    onUpload: {
      name: 'onUpload',
      table: {
        type: {
          summary: '(file) => void'
        }
      }
    }
  }
}

export const Default = (args) => {
  return <UploadImage {...args} />
}
