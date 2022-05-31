import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'

import { Icon } from 'components'

const ClockTimeTimerArrow = createIcon({
  displayName: 'ClockTimeTimerArrow',
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
        <path d="M3.523 9l1.05172e-08-2.96254e-08c1.66142-4.67999 6.80214-7.12702 11.4821-5.46561 4.67999 1.66142 7.12702 6.80214 5.46561 11.4821 -1.66142 4.67999-6.80214 7.12702-11.4821 5.46561 -1.26124-.447746-2.40663-1.17138-3.35261-2.11813"></path>
        <polyline points="9,15 12,12 12,7"></polyline>
        <polyline points="7,9 3,9 3,5"></polyline>
      </g>
      <rect width="24" height="24" fill="none"></rect>
    </>
  )
})

function CustomIcon({ ...rest }) {
  return <Icon as={ClockTimeTimerArrow} {...rest} />
}

export default memo(CustomIcon)
