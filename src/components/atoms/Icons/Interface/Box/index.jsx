import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'
import Theme from 'styles/theme'

const Box = createIcon({
  defaultProps: Theme.components.Icon.baseStyle,
  displayName: 'Box',
  viewBox: '0 0 24 24',
  path: (
    <>
      <g xmlns="http://www.w3.org/2000/svg" fill="none">
        <path d="M0 0h24v24h-24v-24Z" />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M21 7h-18c-.552 0-1-.448-1-1v-2c0-.552.448-1 1-1h18c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1Z"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M20.667 7v12c0 1.105-.895 2-2 2h-13.334c-1.105 0-2-.895-2-2v-12"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M15 14h-6c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1h6c.552 0 1 .448 1 1v1c0 .552-.448 1-1 1Z"
        />
      </g>
    </>
  )
})

export default memo(Box)
