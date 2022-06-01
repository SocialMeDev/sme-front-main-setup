import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'

import { Icon } from 'components'

const PenEdit17 = createIcon({
  displayName: 'PenEdit17',
  viewBox: '0 0 24 24',
  path: (
    <>
      <g xmlns="http://www.w3.org/2000/svg" fill="none">
        <path d="M0 0h24v24h-24Z" />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M17.54 10.12l-3.66-3.66"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M6.251 21h-3.251v-3.251c0-.265.105-.52.293-.707l13.334-13.335c.391-.391 1.024-.391 1.414-8.88178e-16l2.251 2.251c.391.391.391 1.024 0 1.414l-13.334 13.335c-.187.188-.442.293-.707.293Z"
        />
      </g>
    </>
  )
})

function CustomIcon({ ...rest }) {
  return <Icon as={PenEdit17} {...rest} />
}

export default memo(CustomIcon)
