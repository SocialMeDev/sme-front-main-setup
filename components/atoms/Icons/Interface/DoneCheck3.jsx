import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'
import Theme from 'styles/theme'

const DoneCheck3 = createIcon({
  defaultProps: Theme.components.Icon.baseStyle,
  displayName: 'DoneCheck3',
  viewBox: '0 0 24 24',
  path: (
    <>
      <g fill="none">
        <path d="M0 0h24v24h-24Z"></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M20 6.5l-11 11 -5-5"
        ></path>
      </g>
    </>
  )
})

export default memo(DoneCheck3)
