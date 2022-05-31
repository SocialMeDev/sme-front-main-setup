import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'

import { Icon } from 'components'

const Circle = createIcon({
  displayName: 'Circle',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path
        d="M18.364,5.63604c3.51472,3.51472 3.51472,9.2132 0,12.7279c-3.51472,3.51472 -9.2132,3.51472 -12.7279,0c-3.51472,-3.51472 -3.51472,-9.2132 -1.77636e-15,-12.7279c3.51472,-3.51472 9.2132,-3.51472 12.7279,-1.77636e-15"
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

function CustomIcon({ ...rest }) {
  return <Icon as={Circle} {...rest} />
}

export default memo(CustomIcon)
