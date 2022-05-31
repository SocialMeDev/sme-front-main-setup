import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'

import { Icon } from 'components'

const PenEdit1 = createIcon({
  displayName: 'PenEdit1',
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
        <path d="M14.293 12.707l6.414-6.414c.391-.391.391-1.024 0-1.414l-1.586-1.586c-.391-.391-1.024-.391-1.414 0l-6.414 6.414c-.188.188-.293.442-.293.707v2.586h2.586c.265 0 .519-.105.707-.293Z"></path>
        <path d="M3 13h4"></path>
        <path d="M3 17h18"></path>
        <path d="M3 21h18"></path>
      </g>
      <path fill="none" d="M24 24h-24v-24h24v24Z"></path>
    </>
  )
})

function CustomIcon({ ...rest }) {
  return <Icon as={PenEdit1} {...rest} />
}

export default memo(CustomIcon)
