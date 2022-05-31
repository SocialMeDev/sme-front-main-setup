import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'

import { Icon } from 'components'

const ArrowCircleLogin = createIcon({
  displayName: 'ArrowCircleLogin',
  viewBox: '0 0 24 24',
  path: (
    <>
      <g fill="none">
        <path d="M24 0v24h-24v-24Z"></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M11 9l3 3 -3 3"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M14.009 12h-9.823l-5.80968e-08-4.29417e-11c-.746851-.000552028-1.352-.606149-1.352-1.353v0l-8.59338e-08.00110475c2.84064e-07-1.88127.745068-3.68597 2.07222-5.01932v0l8.26182e-08-8.275e-08c1.78824-1.79109 4.21603-2.79646 6.747-2.794l1.25527e-07-5.15175e-10c5.07159-.0208142 9.1998 4.07365 9.22061 9.14524 .0208142 5.07159-4.07365 9.1998-9.14524 9.22061 -3.51141.0144111-6.72363-1.97488-8.27538-5.12485"
        ></path>
      </g>
    </>
  )
})

function CustomIcon({ ...rest }) {
  return <Icon as={ArrowCircleLogin} {...rest} />
}

export default memo(CustomIcon)
