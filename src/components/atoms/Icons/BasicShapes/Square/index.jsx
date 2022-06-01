import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'
import Theme from 'styles/theme'

const Square = createIcon({
  defaultProps: Theme.components.Icon.baseStyle,
  displayName: 'Square',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path
        d="M18.417,20.25h-12.834c-1.013,0 -1.833,-0.821 -1.833,-1.833v-12.834c0,-1.013 0.821,-1.833 1.833,-1.833h12.833c1.013,0 1.833,0.821 1.833,1.833v12.833c0.001,1.013 -0.82,1.834 -1.832,1.834Z"
        strokeLinecap="round"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        strokeLinejoin="round"
      ></path>
      <path fill="none" d="M0,0h24v24h-24Z"></path>
    </>
  )
})

export default memo(Square)
