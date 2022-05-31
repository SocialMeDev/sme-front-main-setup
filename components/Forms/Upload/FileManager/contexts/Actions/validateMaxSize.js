import toast from 'utils/toast'

function validateMaxSize(file, maxSize) {
  const isMaxSize = file.size >= maxSize

  if (isMaxSize) {
    toast.error('Tamanho máximo excessivo.')
    return false
  }

  return true
}

export default validateMaxSize
