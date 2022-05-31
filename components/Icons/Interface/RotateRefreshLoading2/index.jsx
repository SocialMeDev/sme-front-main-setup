import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'

import { Icon } from 'components'

const RotateRefreshLoading2 = createIcon({
  displayName: 'RotateRefreshLoading2',
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
        <path d="M12 4l-1.91291e-07 2.92397e-11c-4.41828.000675422-7.99945 3.58294-7.99878 8.00122 .000675422 4.41828 3.58294 7.99945 8.00122 7.99878 4.41828-.000675422 7.99945-3.58294 7.99878-8.00122 -.000447908-2.92999-1.60259-5.62532-4.17622-7.02578"></path>
        <polyline points="15.825,8.048 15.825,4.512 19.361,4.512"></polyline>
      </g>
      <path fill="none" d="M0 24v-24h24v24Z"></path>
    </>
  )
})

function CustomIcon({ ...rest }) {
  return <Icon as={RotateRefreshLoading2} {...rest} />
}

export default memo(CustomIcon)
