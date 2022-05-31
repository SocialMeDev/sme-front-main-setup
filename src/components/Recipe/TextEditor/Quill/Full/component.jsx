import { useCallback } from 'react'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'

import { Box } from 'components'

export default function QuillFullPage({ setHtml, initialHtml, readOnly }) {
  const TOOLBAR_OPTIONS = [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['bold', 'italic', 'underline'],
    [{ color: [] }, { background: [] }],
    [{ script: 'sub' }, { script: 'super' }],
    [{ align: [] }],
    ['image', 'blockquote', 'code-block'],
    ['clean']
  ]

  const wrapperRef = useCallback((wrapper) => {
    if (wrapper === null) return
    wrapper.innerHTML = ''
    const editor = document.createElement('div')
    wrapper.append(editor)
    const quill = new Quill(editor, {
      theme: 'snow',
      modules: { toolbar: TOOLBAR_OPTIONS },
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

  return <Box id="text-editor-quill-full" ref={wrapperRef}></Box>
}
