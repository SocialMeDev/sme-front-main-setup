import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'
import Theme from 'styles/theme'

const WorldSquare = createIcon({
  defaultProps: Theme.components.Icon.baseStyle,
  displayName: 'WorldSquare',
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
          d="M6,12h12"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M16.2426,7.75736c2.34315,2.34315 2.34315,6.14214 0,8.48528c-2.34315,2.34315 -6.14214,2.34315 -8.48528,0c-2.34315,-2.34315 -2.34315,-6.14214 -1.77636e-15,-8.48528c2.34315,-2.34315 6.14214,-2.34315 8.48528,-1.77636e-15"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M13.8767,7.75736c1.03645,2.34315 1.03645,6.14214 0,8.48528c-1.03645,2.34315 -2.71687,2.34315 -3.75332,0c-1.03645,-2.34315 -1.03645,-6.14214 -1.77636e-15,-8.48528c1.03645,-2.34315 2.71687,-2.34315 3.75332,-1.77636e-15"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M7.5,3h9.004c2.483,0 4.496,2.013 4.496,4.496v9.009c0,2.482 -2.013,4.495 -4.496,4.495h-9.008c-2.483,0 -4.496,-2.013 -4.496,-4.496v-9.004c0,-2.485 2.015,-4.5 4.5,-4.5Z"
        ></path>
      </g>
    </>
  )
})

export default memo(WorldSquare)
