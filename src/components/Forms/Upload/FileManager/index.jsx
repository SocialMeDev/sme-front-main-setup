import { memo } from 'react'

import FileManagerProvider from './contexts/Provider'

function FileManager({ children, ...rest }) {
  return <FileManagerProvider {...rest}>{children}</FileManagerProvider>
}

export default memo(FileManager)
