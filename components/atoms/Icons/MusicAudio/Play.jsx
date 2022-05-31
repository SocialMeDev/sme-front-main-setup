import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'
import Theme from 'styles/theme'

const Play = createIcon({
  defaultProps: Theme.components.Icon.baseStyle,
  displayName: 'Play',
  viewBox: '0 0 24 24',
  path: (
    <>
      <g fill="none">
        <path d="M0,0h24v24h-24Z"></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M21,12v0c0,4.971 -4.029,9 -9,9v0c-4.971,0 -9,-4.029 -9,-9v0c0,-4.971 4.029,-9 9,-9v0c4.971,0 9,4.029 9,9Z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M10.941,9.058l3.882,2.296c0.491,0.29 0.491,1.001 0,1.291l-3.882,2.296c-0.5,0.296 -1.132,-0.065 -1.132,-0.646v-4.591c-1.77636e-15,-0.581 0.632,-0.942 1.132,-0.646Z"
        ></path>
      </g>
    </>
  )
})

export default memo(Play)
