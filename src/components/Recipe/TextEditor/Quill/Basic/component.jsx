import { memo, useCallback } from 'react'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'

import { Box } from 'components'

function QuillFullPage({
  setHtml,
  initialHtml,
  readOnly = false,
  modules = true
}) {
  const TOOLBAR_OPTIONS = [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline'],
    [{ color: [] }, { background: [] }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ align: [] }],
    ['link'],
    ['clean']
  ]

  const wrapperRef = useCallback((wrapper) => {
    if (wrapper === null) return
    wrapper.innerHTML = ''
    const editor = document.createElement('div')
    wrapper.append(editor)
    const quill = new Quill(editor, {
      theme: 'snow',
      modules: { toolbar: modules ? TOOLBAR_OPTIONS : false },
      readOnly: readOnly
    })

    if (initialHtml) {
      const delta = quill.clipboard.convert(initialHtml)

      quill.setContents(delta, 'silent')
    }

    quill.on('text-change', function () {
      setHtml(quill.root.innerHTML)
    })
  }, [])

  return <Box id="text-editor-quill-basic" ref={wrapperRef}></Box>
}

export default memo(QuillFullPage)
