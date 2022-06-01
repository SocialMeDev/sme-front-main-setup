import toast from 'utils/toast'

const getFileExtension = (file) => {
  const splitedFilename = file.name.split('.')

  if (splitedFilename.length === 1) return 'Sem extensão'

  return splitedFilename.pop().toLowerCase()
}

function validateExtension(acceptFiles, file) {
  const extension = getFileExtension(file)

  if (extension === 'Sem extensão') {
    toast.error(`Não foi reconhecida sua extensão.`)

    return false
  } else if (!acceptFiles.includes(extension)) {
    toast.error(`A extensão .${extension} não é permitida`)
    return false
  }

  return true
}

export default validateExtension
