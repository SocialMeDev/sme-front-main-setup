import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'

import { Icon } from 'components'

const Printer = createIcon({
  displayName: 'Printer',
  viewBox: '0 0 24 24',
  path: (
    <>
      <g fill="none">
        <path d="M0 0h24v24h-24v-24Z"></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M7 8v-4c0-.552.448-1 1-1h8c.552 0 1 .448 1 1v4"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M7 17h-2c-1.105 0-2-.895-2-2v-5c0-1.105.895-2 2-2h14c1.105 0 2 .895 2 2v5c0 1.105-.895 2-2 2h-2"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M7 13.8h10v6.2c0 .552-.448 1-1 1h-8c-.552 0-1-.448-1-1v-6.2Z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M7 11h1"
        ></path>
      </g>
    </>
  )
})

function CustomIcon({ ...rest }) {
  return <Icon as={Printer} {...rest} />
}

export default memo(CustomIcon)
