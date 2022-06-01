import { Dropzone, FileManager } from 'components'

import SingleFileItem from '.'

export default {
  component: SingleFileItem,
  title: 'Forms/Dropzone/Single',
  args: {
    maxSize: 5000000000,
    acceptFiles: ['csv', 'png', 'jpg', 'zip', 'rar'],
    onUploadFinished: () => {
      console.log(`Finished`)
    },
    onUpload: (file) => {
      console.log(`uploading file:`, file)
    }
  },
  argTypes: {
    onUploadFinished: {
      name: 'onUploadFinished',
      table: {
        type: {
          summary: '() => void'
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
  return (
    <FileManager {...args}>
      <Dropzone />

      <SingleFileItem />
    </FileManager>
  )
}
