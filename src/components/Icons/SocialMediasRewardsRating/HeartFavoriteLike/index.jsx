import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'

import { Icon } from 'components'

const HeartFavoriteLike = createIcon({
  displayName: 'HeartFavoriteLike',
  viewBox: '0 0 24 24',
  path: (
    <>
      <g xmlns="http://www.w3.org/2000/svg" fill="none">
        <path d="M0,0h24v24h-24Z" />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M18.364,5.63604c3.51472,3.51472 3.51472,9.2132 0,12.7279c-3.51472,3.51472 -9.2132,3.51472 -12.7279,0c-3.51472,-3.51472 -3.51472,-9.2132 -1.77636e-15,-12.7279c3.51472,-3.51472 9.2132,-3.51472 12.7279,-1.77636e-15"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M13.746,8.75c1.499,0 2.504,1.397 2.504,2.698c0,2.64 -4.174,4.802 -4.25,4.802c-0.076,0 -4.25,-2.162 -4.25,-4.802c0,-1.301 1.006,-2.698 2.504,-2.698c0.857,0 1.42,0.424 1.746,0.802c0.325,-0.378 0.888,-0.802 1.746,-0.802Z"
        />
      </g>
    </>
  )
})

function CustomIcon({ ...rest }) {
  return <Icon as={HeartFavoriteLike} {...rest} />
}

export default memo(CustomIcon)
