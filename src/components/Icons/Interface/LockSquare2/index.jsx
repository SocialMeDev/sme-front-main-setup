import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'

import { Icon } from 'components'

const LockSquare2 = createIcon({
  displayName: 'LockSquare2',
  viewBox: '0 0 24 24',
  path: (
    <>
      <g fill="none">
        <path d="M0 0h24v24h-24v-24Z"></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M10 10.697h4c.55 0 1 .45 1 1v3.053c0 .552-.448 1-1 1h-4c-.552 0-1-.448-1-1v-3.053c0-.552.448-1 1-1Z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M10.316 10.697v-1.263c0-.93.754-1.684 1.684-1.684 .93 0 1.684.754 1.684 1.684v1.261"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M18 21h-12c-1.657 0-3-1.343-3-3v-12c0-1.657 1.343-3 3-3h12c1.657 0 3 1.343 3 3v12c0 1.657-1.343 3-3 3Z"
        ></path>
      </g>
    </>
  )
})

function CustomIcon({ ...rest }) {
  return <Icon as={LockSquare2} {...rest} />
}

export default memo(CustomIcon)
