import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'

import { Icon } from 'components'

const Arrow27 = createIcon({
  displayName: 'Arrow27',
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
        <path d="M12,19v-14" />
        <path d="M17.001,13.999l-5.001,5.001l-5.001,-5.001" />
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
  return <Icon as={Arrow27} {...rest} />
}

export default memo(CustomIcon)
