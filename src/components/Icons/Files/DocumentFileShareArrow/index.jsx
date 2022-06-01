import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'

import { Icon } from 'components'

const DocumentFileShareArrow = createIcon({
  displayName: 'DocumentFileShareArrow',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path
        d="M13,21h4a3,3,0,0,0,3-3V8.50931A3,3,0,0,0,19.12132,6.388L16.612,3.87868A3,3,0,0,0,14.49069,3H7A3,3,0,0,0,4,6v6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        fillRule="evenodd"
      />
      <path
        d="M20,8.5H16.5a2,2,0,0,1-2-2V3"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        fillRule="evenodd"
      />
      <line
        x1="5"
        y1="20"
        x2="9"
        y2="16"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <line
        x1="6"
        y1="16"
        x2="9"
        y2="16"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <line
        x1="9"
        y1="19"
        x2="9"
        y2="16"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path d="M0,0H24V24H0Z" fill="none" />
    </>
  )
})

function CustomIcon({ ...rest }) {
  return <Icon as={DocumentFileShareArrow} {...rest} />
}

export default memo(CustomIcon)
