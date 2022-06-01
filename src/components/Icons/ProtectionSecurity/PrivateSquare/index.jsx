import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'

import { Icon } from 'components'

const PrivateSquare = createIcon({
  displayName: 'PrivateSquare',
  viewBox: '0 0 24 24',
  path: (
    <>
      <rect width="24" height="24" fill="none" />
      <line
        x1="17.5"
        y1="11.5"
        x2="6.5"
        y2="11.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <line
        x1="13.26158"
        y1="15.5"
        x2="10.73844"
        y2="15.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <circle
        cx="9"
        cy="15.75"
        r="1.75"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <circle
        cx="15"
        cy="15.75"
        r="1.75"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M8,11.5l.648-3.88617A1.333,1.333,0,0,1,9.96252,6.5h4.07386A1.333,1.333,0,0,1,15.352,7.61383L16,11.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        strokeWidth="1.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </>
  )
})

function CustomIcon({ ...rest }) {
  return <Icon as={PrivateSquare} {...rest} />
}

export default memo(CustomIcon)
