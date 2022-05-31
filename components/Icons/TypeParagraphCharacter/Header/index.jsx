import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'

import { Icon } from 'components'

const Header = createIcon({
  displayName: 'Header',
  viewBox: '0 0 24 24',
  path: (
    <>
      <g
        strokeLinecap="round"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        strokeLinejoin="round"
      >
        <line x1="16" x2="4" y1="12" y2="12"></line>
        <line x1="19" x2="4" y1="16" y2="16"></line>
        <line x1="11" x2="4" y1="20" y2="20"></line>
        <rect width="16" height="4" x="4" y="4" rx=".55228" ry="0"></rect>
      </g>
      <rect width="24" height="24" fill="none"></rect>
    </>
  )
})

function CustomIcon({ ...rest }) {
  return <Icon as={Header} {...rest} />
}

export default memo(CustomIcon)
