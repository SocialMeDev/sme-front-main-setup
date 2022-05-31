import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'

import { Icon } from 'components'

const Database1 = createIcon({
  displayName: 'Database1',
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
        <path d="M5,18c0,1.381 3.134,2.5 7,2.5c3.866,0 7,-1.119 7,-2.5v-12c0,-1.381 -3.134,-2.5 -7,-2.5c-3.866,0 -7,1.119 -7,2.5v12Z" />
        <path d="M19,6c0,1.381 -3.134,2.5 -7,2.5c-3.866,0 -7,-1.119 -7,-2.5" />
        <path d="M19,14c0,1.381 -3.134,2.5 -7,2.5c-3.866,0 -7,-1.119 -7,-2.5" />
        <path d="M19,10c0,1.381 -3.134,2.5 -7,2.5c-3.866,0 -7,-1.119 -7,-2.5" />
      </g>
    </>
  )
})

function CustomIcon({ ...rest }) {
  return <Icon as={Database1} {...rest} />
}

export default memo(CustomIcon)
