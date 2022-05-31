import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'

import { Icon } from 'components'

const Heartbeat2 = createIcon({
  displayName: 'Heartbeat2',
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
        <path d="M18,12h-1.691c-0.189,0 -0.363,0.107 -0.447,0.276l-1.415,2.829c-0.184,0.369 -0.71,0.369 -0.894,0l-3.123,-6.244c-0.181,-0.362 -0.695,-0.37 -0.887,-0.014l-1.559,2.89c-0.088,0.162 -0.257,0.263 -0.44,0.263h-4.544"></path>
        <path d="M3.523,9c1.237,-3.493 4.56,-6 8.477,-6c4.971,0 9,4.029 9,9c0,4.971 -4.029,9 -9,9c-3.917,0 -7.24,-2.507 -8.477,-6"></path>
      </g>
      <path fill="none" d="M0,0h24v24h-24v-24Z"></path>
    </>
  )
})

function CustomIcon({ ...rest }) {
  return <Icon as={Heartbeat2} {...rest} />
}

export default memo(CustomIcon)
