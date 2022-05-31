import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'

import { Icon } from 'components'

const DoneCheck3 = createIcon({
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

function CustomIcon({ ...rest }) {
  return <Icon as={DoneCheck3} {...rest} />
}

export default memo(CustomIcon)
