import { useContext, useCallback, useEffect, useState, useRef } from 'react'

import FileManagerContext from './Context'
import { Input } from 'components'

import calcUploadProgress from './Actions/onUploadProgress'
import validateExtension from './Actions/validateExtension'
import validateMaxSize from './Actions/validateMaxSize'

function FileManagerProvider({
  maxSize = 5000000000,
  acceptFiles = [],
  children,
  onUpload,
  onUploadFinish,
  ...rest
}) {
  const inputRef = useRef({})

  const [files, setFiles] = useState([])
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)

  const onUploadProgress = useCallback((event) => {
    const progress = calcUploadProgress(event)

    setUploadProgress(progress)
  }, [])

  const isValidMaxSize = useCallback((size) => {
    return validateExtension(acceptFiles, size)
  }, [])

  const isValidExtension = useCallback((file) => {
    return validateMaxSize(file, maxSize)
  }, [])

  const onChangeFile = useCallback((file) => {
    const url = URL.createObjectURL(file)

    if (isValidExtension(file) && isValidMaxSize(file)) {
      setFiles([{ file, url }])
    }
  }, [])

  const onRemoveFile = useCallback((file) => {
    setFiles((oldFiles) => {
      return oldFiles.filter((oldFile) => file.url === oldFile.urk)
    })
  }, [])

  const onSearchFile = useCallback(() => {
    inputRef.current.click()
  }, [])

  useEffect(() => {
    if (uploadProgress === 100) {
      if (onUploadFinish) onUploadFinish()
    }
  }, [uploadProgress])

  useEffect(() => {
    if (files.length > 0) {
      const [file] = files

      setIsUploading(true)

      if (onUpload) onUpload(file, onUploadProgress)
    }
  }, [files])

  return (
    <FileManagerContext.Provider
      value={{
        isUploading,
        setIsUploading,
        maxSize,
        acceptFiles,
        uploadProgress,
        files,
        onChangeFile,
        onRemoveFile,
        onSearchFile,
        onUploadProgress
      }}
    >
      <Input
        ref={inputRef}
        type="file"
        onChange={(event) => {
          onChangeFile(event.target.files[0])
        }}
        hidden
        {...rest}
      />

      {children}
    </FileManagerContext.Provider>
  )
}

export default FileManagerProvider

export const useFileManager = () => useContext(FileManagerContext)
