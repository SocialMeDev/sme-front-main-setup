import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'
import Theme from 'styles/theme'

const DocumentsFileDownload = createIcon({
  defaultProps: Theme.components.Icon.baseStyle,
  displayName: 'DocumentsFileDownload',
  viewBox: '0 0 24 24',
  path: (
    <>
      <g
        strokeLinecap="round"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        strokeLinejoin="round"
      >
        <path d="M18.414,6.414l-2.828,-2.828c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586h-7.172c-1.105,0 -2,0.895 -2,2v14c0,1.105 0.895,2 2,2h10c1.105,0 2,-0.895 2,-2v-11.172c0,-0.53 -0.211,-1.039 -0.586,-1.414Z"></path>
        <path d="M11.09,17l-2.03,-2.03"></path>
        <path d="M13,15.09l-1.91,1.91"></path>
        <path d="M11.09,17v-6"></path>
        <path d="M19,8h-4c-0.552,0 -1,-0.448 -1,-1v-4"></path>
      </g>
      <path fill="none" d="M0,0h24v24h-24Z"></path>
    </>
  )
})

export default memo(DocumentsFileDownload)
