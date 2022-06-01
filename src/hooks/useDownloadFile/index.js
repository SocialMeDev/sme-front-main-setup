import { useState } from 'react'
import { slugMask } from 'utils/masks'

function useDownloadFile({ fileData, fileName, mimeFileType }) {
  const [isLoading, setDownloadLoading] = useState(false)

  const downloadFile = () => {
    setDownloadLoading(true)

    const fileBlob = new Blob([JSON.stringify(fileData)], {
      type: mimeFileType
    })

    const linkElement = document.createElement('a')

    linkElement.download = slugMask(fileName)

    linkElement.href = window.URL.createObjectURL(fileBlob)

    const clickEvent = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true
    })

    linkElement.dispatchEvent(clickEvent)

    linkElement.remove()

    setDownloadLoading(false)
  }

  const onExport = async () => {
    downloadFile()
  }

  return { isLoading, onExport }
}

export default useDownloadFile
