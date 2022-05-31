import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'
import Theme from 'styles/theme'

const ProgrammingCode1 = createIcon({
  defaultProps: Theme.components.Icon.baseStyle,
  displayName: 'ProgrammingCode1',
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
        <polyline points="9,14 7,12 9,10" />
        <polyline points="15,10 17,12 15,14" />
        <circle cx="12" cy="12" r="9" />
        <line x1="12.78" x2="11.11" y1="9" y2="15" />
      </g>
      <path
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        d="M0 0h24v24h-24Z"
      />
    </>
  )
})

export default memo(ProgrammingCode1)
