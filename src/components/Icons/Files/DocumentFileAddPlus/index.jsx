import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'

import { Icon } from 'components'

const DocumentFileAddPlus = createIcon({
  displayName: 'DocumentFileAddPlus',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path
        d="M14,21h3a3,3,0,0,0,3-3V8.50931A3,3,0,0,0,19.12132,6.388L16.612,3.87868A3,3,0,0,0,14.49069,3H7A3,3,0,0,0,4,6v4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        fillRule="evenodd"
      />
      <rect
        x="3"
        y="13"
        width="8"
        height="8"
        rx="1.92"
        strokeWidth="1.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <line
        x1="8.375"
        y1="16.875"
        x2="5.875"
        y2="16.875"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <line
        x1="7.125"
        y1="15.625"
        x2="7.125"
        y2="18.125"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
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
      <path d="M0,0H24V24H0Z" fill="none" />
    </>
  )
})

function CustomIcon({ ...rest }) {
  return <Icon as={DocumentFileAddPlus} {...rest} />
}

export default memo(CustomIcon)
