import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'

import { Icon } from 'components'

const Bubble5 = createIcon({
  displayName: 'Bubble5',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path
        d="M4.151,16.396c-0.73,-1.3 -1.151,-2.798 -1.151,-4.396c0,-4.971 4.029,-9 9,-9c4.971,0 9,4.029 9,9c0,4.971 -4.029,9 -9,9c-1.598,0 -3.096,-0.421 -4.396,-1.151l-4.604,1.151l1.151,-4.604Z"
        strokeLinecap="round"
        strokeWidth="1.5882"
        stroke="currentColor"
        fill="none"
        strokeLinejoin="round"
      ></path>
      <path fill="none" d="M0,0h24v24h-24v-24Z"></path>
    </>
  )
})

function CustomIcon({ ...rest }) {
  return <Icon as={Bubble5} {...rest} />
}

export default memo(CustomIcon)
