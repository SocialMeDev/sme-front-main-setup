import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'

import { Icon } from 'components'

const DoneCheck = createIcon({
  displayName: 'DoneCheck',
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
          d="M12 21v0c-4.971 0-9-4.029-9-9v0c0-4.971 4.029-9 9-9v0c4.971 0 9 4.029 9 9v0c0 4.971-4.029 9-9 9Z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M16 10l-5 5 -3-3"
        ></path>
      </g>
    </>
  )
})

function CustomIcon({ ...rest }) {
  return <Icon as={DoneCheck} {...rest} />
}

export default memo(CustomIcon)
