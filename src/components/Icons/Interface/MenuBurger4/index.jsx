import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'

import { Icon } from 'components'

const MenuBurger4 = createIcon({
  displayName: 'MenuBurger4',
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
        <line x1="5.5" x2="18.5" y1="12" y2="12"></line>
        <line x1="5.5" x2="18.5" y1="16" y2="16"></line>
        <line x1="5.5" x2="18.5" y1="8" y2="8"></line>
      </g>
      <rect width="24" height="24" fill="none"></rect>
    </>
  )
})

function CustomIcon({ ...rest }) {
  return <Icon as={MenuBurger4} {...rest} />
}

export default memo(CustomIcon)
