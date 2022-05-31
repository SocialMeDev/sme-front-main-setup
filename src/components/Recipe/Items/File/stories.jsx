import FileItems from '.'

export default {
  component: FileItems,
  title: 'Recipe/Items/File',
  args: {
    files: [
      {
        id: 1,
        name: 'Nome do arquivo',
        public_url: 'URL pública do arquivo',
        extension: 'pdf'
      }
    ]
  },
  argTypes: {
    files: {
      name: 'files',
      table: {
        type: {
          summary: 'Files[]'
        }
      }
    }
  }
}

export const Default = (args) => {
  return (
    <>
      {args.files.map((file) => (
        <FileItems key={file.id} {...file} />
      ))}
    </>
  )
}
