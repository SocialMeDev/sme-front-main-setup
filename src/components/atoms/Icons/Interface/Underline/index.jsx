import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'
import Theme from 'styles/theme'

const Underline = createIcon({
  defaultProps: Theme.components.Icon.baseStyle,
  displayName: 'Underline',
  viewBox: '0 0 24 24',
  path: (
    <>
      <g xmlns="http://www.w3.org/2000/svg" fill="none">
        <path d="M0 0h24v24h-24Z" />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M6 20h12"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M17 4v7c0 2.761-2.239 5-5 5 -2.761 0-5-2.239-5-5v-7"
        />
      </g>
    </>
  )
})

export default memo(Underline)
