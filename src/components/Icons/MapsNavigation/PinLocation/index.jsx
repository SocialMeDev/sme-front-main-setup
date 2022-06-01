import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'

import { Icon } from 'components'

const PinLocation = createIcon({
  displayName: 'PinLocation',
  viewBox: '0 0 24 24',
  path: (
    <>
      <g xmlns="http://www.w3.org/2000/svg" fill="none">
        <path d="M0,0h24v24h-24Z" />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12,13v0c-1.657,0 -3,-1.343 -3,-3v0c0,-1.657 1.343,-3 3,-3v0c1.657,0 3,1.343 3,3v0c0,1.657 -1.343,3 -3,3Z"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12,21c0,0 -7,-5.75 -7,-11c0,-3.866 3.134,-7 7,-7c3.866,0 7,3.134 7,7c0,5.25 -7,11 -7,11Z"
        />
      </g>
    </>
  )
})

function CustomIcon({ ...rest }) {
  return <Icon as={PinLocation} {...rest} />
}

export default memo(CustomIcon)
