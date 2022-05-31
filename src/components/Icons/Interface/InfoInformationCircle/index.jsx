import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'

import { Icon } from 'components'

const InfoInformationCircle = createIcon({
  displayName: 'InfoInformationCircle',
  viewBox: '0 0 24 24',
  path: (
    <>
      <g fill="none">
        <path d="M24 24h-24v-24h24Z"></path>
        <circle
          cx="12"
          cy="12"
          r="9"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></circle>
        <line
          x1="11"
          x2="13.31"
          y1="15.5"
          y2="15.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></line>
        <polyline
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          points="12.159,15.5 12.159,11.25 11.009,11.25"
        ></polyline>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12.1 8.24726v0c0 .138071-.111929.25-.25.25 -.138071 0-.25-.111929-.25-.25 0-.138071.111929-.25.25-.25"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M11.85 7.99726h-1.09278e-08c.138071-6.03528e-09.25.111929.25.25"
        ></path>
      </g>
    </>
  )
})

function CustomIcon({ ...rest }) {
  return <Icon as={InfoInformationCircle} {...rest} />
}

export default memo(CustomIcon)
