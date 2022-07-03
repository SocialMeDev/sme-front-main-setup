import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'

import { Icon } from 'components'

const Arrow = createIcon({
  displayName: 'Arrow',
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
        <path d="M19,12h-14" />
        <path d="M14,17l5,-5" />
        <path d="M14,7l5,5" />
      </g>
      <path
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        d="M0,0h24v24h-24Z"
      />
    </>
  )
})

function CustomIcon({ ...rest }) {
  return <Icon as={Arrow} {...rest} />
}

export default memo(CustomIcon)
