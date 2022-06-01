import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'
import Theme from 'styles/theme'

const ProgrammingCodeList = createIcon({
  defaultProps: Theme.components.Icon.baseStyle,
  displayName: 'ProgrammingCodeList',
  viewBox: '0 0 24 24',
  path: (
    <>
      <g
        xmlns="http://www.w3.org/2000/svg"
        strokeLinecap="round"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        strokeLinejoin="round"
      >
        <path d="M4.5 4H16l-.01 0c1.1-.01 2 .89 2 1.99v10" />
        <path d="M9 8.02l6 0" />
        <path d="M9 12l6 0" />
        <path d="M7.5 20H19l-.01-.001c1.1 0 2-.9 2-2v-1.01 0c0-.56-.45-1-1-1h-10 -.01c-.56 0-1 .44-1 1 0 0 0 0 0 0v1.5 -.01c0 .82-.68 1.5-1.5 1.5v0l0-.001c-.83 0-1.5-.68-1.51-1.5 -.001-.01-.001-.01-.001-.01v-13 0c0-.83-.68-1.5-1.5-1.5 0 0-.001 0-.001 0v0l-.01 0c-.83 0-1.5.67-1.5 1.5 0 0 0 0 0 0v2.5l0 0c0 .55.44.99 1 .99h1.99" />
      </g>
      <path xmlns="http://www.w3.org/2000/svg" fill="none" d="M0 0h24v24H0Z" />
    </>
  )
})

export default memo(ProgrammingCodeList)
