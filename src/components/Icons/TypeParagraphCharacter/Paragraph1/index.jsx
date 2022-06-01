import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'

import { Icon } from 'components'

const Paragraph1 = createIcon({
  displayName: 'Paragraph1',
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
        <path d="M18 4h-9.5l-1.09278e-07 2.66454e-15c-1.38071 6.03528e-08-2.5 1.11929-2.5 2.5 6.03528e-08 1.38071 1.11929 2.5 2.5 2.5h2.5"></path>
        <path d="M11 4v9"></path>
        <path d="M15.1 4v9"></path>
        <line x1="4" x2="21" y1="18" y2="18"></line>
        <polyline points="19.086,19.914 21,18 19.086,16.086"></polyline>
      </g>
      <rect width="24" height="24" fill="none"></rect>
    </>
  )
})

function CustomIcon({ ...rest }) {
  return <Icon as={Paragraph1} {...rest} />
}

export default memo(CustomIcon)
