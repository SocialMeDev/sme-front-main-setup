const onUploadProgressInClient = (imageUrl, setIsUploading) => {
  const xhr = new XMLHttpRequest()

  xhr.open('GET', imageUrl, true)

  xhr.onloadstart = () => {
    setIsUploading(true)
  }

  xhr.onloadend = () => {
    setIsUploading(false)
  }

  xhr.send()
}

export default onUploadProgressInClient
