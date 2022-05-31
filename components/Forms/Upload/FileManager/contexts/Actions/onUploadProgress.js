function onUploadProgress(event) {
  return Math.round((event.loaded * 100) / event.total)
}

export default onUploadProgress
