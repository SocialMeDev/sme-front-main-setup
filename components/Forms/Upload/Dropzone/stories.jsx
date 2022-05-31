import { FileManager } from 'components'

import Dropzone from '.'

export default {
  component: Dropzone,
  title: 'Forms/Dropzone/Default',
  args: {
    maxSize: 5000000000,
    acceptFiles: ['csv', 'png', 'jpg']
  },
  argTypes: {
    onProgress: {
      name: 'onProgress',
      table: {
        type: {
          summary: '(number) => void'
        }
      }
    },
    onUpload: {
      name: 'onUpload',
      table: {
        type: {
          summary: '(file, onUploadProgress) => void'
        }
      }
    }
  }
}

export const Default = (args) => {
  return (
    <FileManager {...args}>
      <Dropzone />
    </FileManager>
  )
}
