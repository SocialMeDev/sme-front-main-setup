const getStyle = () => {
  return {
    //FULL PAGE
    '#text-editor-quill-full-page .ql-editor': {
      width: '8.5in',
      minHeight: '11in',
      padding: '1in',
      margin: '1rem',
      boxShadow: '0 0 5px 0 rgba(0, 0, 0, .5)',
      backgroundColor: 'white',
      zIndex: '0'
    },
    '#text-editor-quill-full-page .ql-container.ql-snow': {
      border: 'none',
      display: 'flex',
      justifyContent: 'center'
    },
    '#text-editor-quill-full-page .ql-toolbar.ql-snow': {
      display: 'flex',
      justifyContent: 'center',
      position: 'sticky',
      top: '0',
      zIndex: '1',
      backgroundColor: 'bgContent',
      borderTop: 'none',
      borderBottom: '1px solid',
      borderColor: 'borderColor',
      borderLeft: 'none',
      borderRight: 'none'
      //boxShadow: '0 0 5px 0 rgba(0, 0, 0, .5)'
    },

    '#text-editor-quill-basic .ql-editor': {
      backgroundColor: 'white',
      width: '8.5in',
      borderTop: '1px solid',
      borderBottom: '1px solid',
      borderLeft: '1px solid',
      borderRight: '1px solid',
      borderColor: 'borderColor'
    },
    '#text-editor-quill-basic .ql-container.ql-snow': {
      border: 'none',
      display: 'flex',
      justifyContent: 'center'
    },
    '#text-editor-quill-basic .ql-toolbar.ql-snow': {
      backgroundColor: 'bgContent'
    },
    '@media print': {
      body: {
        background: 'none'
      },
      '#text-editor-quill-full-page .ql-editor': {
        width: '6.5in',
        height: '9in',
        padding: 0,
        margin: 0,
        boxShadow: 'none',
        alignSelf: 'flex-start'
      },
      '#text-editor-quill-full-page .ql-toolbar.ql-snow': {
        display: 'none'
      }
    },
    //BASIC
    '#text-editor-quill-basic .ql-editor': {
      backgroundColor: 'white',
      width: '8.5in',
      borderTop: '1px solid',
      borderBottom: '1px solid',
      borderLeft: '1px solid',
      borderRight: '1px solid',
      borderColor: 'borderColor'
    },
    '#text-editor-quill-basic .ql-container.ql-snow': {
      border: 'none',
      display: 'flex',
      justifyContent: 'center'
    },
    '#text-editor-quill-basic .ql-toolbar.ql-snow': {
      backgroundColor: 'bgContent'
    },
    // FULL
    '#text-editor-quill-full .ql-editor': {
      backgroundColor: 'white',
      width: '100%',
      borderTop: '1px solid',
      borderBottom: '1px solid',
      borderLeft: '1px solid',
      borderRight: '1px solid',
      borderColor: 'borderColor'
    },
    '#text-editor-quill-full .ql-container.ql-snow': {
      border: 'none',
      width: '100%',
      height: '200px'
    },
    '#text-editor-quill-full .ql-toolbar.ql-snow': {
      backgroundColor: 'bgContent'
    }
  }
}

export default getStyle()
