import { useEffect, useState } from 'react'

export default function useCanvasCrop({ imageURL, imageRef, aspectRatio = 1 }) {
  const [loadingImage, setLoadingImage] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const imageObj = new Image()

    imageObj.onload = () => {
      const inputWidth = imageObj.naturalWidth
      const inputHeight = imageObj.naturalHeight

      const inputImageAspectRatio = inputWidth / inputHeight

      let outputWidth = inputWidth
      let outputHeight = inputHeight

      if (inputImageAspectRatio > aspectRatio) {
        outputWidth = inputHeight * aspectRatio
      } else if (inputImageAspectRatio < aspectRatio) {
        outputHeight = inputHeight / aspectRatio
      }

      const outputX = (outputWidth - inputWidth) * 0.5
      const outputY = (outputHeight - inputHeight) * 0.5

      const canvas = document.createElement('canvas')

      canvas.width = outputWidth
      canvas.height = outputHeight

      const ctx = canvas.getContext('2d')

      ctx.drawImage(imageObj, outputX, outputY)

      try {
        imageRef.current.src = canvas.toDataURL()
      } catch (e) {
        setError(e)
      }

      setLoadingImage(false)
    }

    imageObj.crossOrigin = 'anonymous'
    imageObj.src = imageURL
  }, [imageURL, imageRef.current])

  return { loadingImage, error }
}
