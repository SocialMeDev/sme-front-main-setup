import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'
import Theme from 'styles/theme'

const GridLayout5 = createIcon({
  defaultProps: Theme.components.Icon.baseStyle,
  displayName: 'GridLayout5',
  viewBox: '0 0 24 24',
  path: (
    <>
      <g transform="matrix(1 0 0 1 0 24)">
        <rect
          width="24"
          height="24"
          fill="none"
          transform="matrix(6.12323e-17 -1 1 6.12323e-17 0 0)"
        ></rect>
      </g>
      <g
        strokeLinecap="round"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        strokeLinejoin="round"
      >
        <rect width="18" height="18" x="3" y="3" rx="1.10456" ry="0"></rect>
        <line x1="3" x2="21" y1="15" y2="15"></line>
        <line x1="3" x2="21" y1="9" y2="9"></line>
      </g>
    </>
  )
})

export default memo(GridLayout5)