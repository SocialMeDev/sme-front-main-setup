import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'

import { Icon } from 'components'

const GridLayout17 = createIcon({
  displayName: 'GridLayout17',
  viewBox: '0 0 24 24',
  path: (
    <>
      <g fill="none">
        <path d="M0 0h24v24h-24Z"></path>
        <path
          fillRule="evenodd"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M7.75 9.75h-2.75c-1.105 0-2-.895-2-2v-2.75c0-1.105.895-2 2-2h2.75c1.105 0 2 .895 2 2v2.75c0 1.105-.895 2-2 2Z"
        ></path>
        <path
          fillRule="evenodd"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M19 9.75h-2.75c-1.105 0-2-.895-2-2v-2.75c0-1.105.895-2 2-2h2.75c1.105 0 2 .895 2 2v2.75c0 1.105-.895 2-2 2Z"
        ></path>
        <path
          fillRule="evenodd"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M7.75 21h-2.75c-1.105 0-2-.895-2-2v-2.75c0-1.105.895-2 2-2h2.75c1.105 0 2 .895 2 2v2.75c0 1.105-.895 2-2 2Z"
        ></path>
        <path
          fillRule="evenodd"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M19 21h-2.75c-1.105 0-2-.895-2-2v-2.75c0-1.105.895-2 2-2h2.75c1.105 0 2 .895 2 2v2.75c0 1.105-.895 2-2 2Z"
        ></path>
      </g>
    </>
  )
})

function CustomIcon({ ...rest }) {
  return <Icon as={GridLayout17} {...rest} />
}

export default memo(CustomIcon)
