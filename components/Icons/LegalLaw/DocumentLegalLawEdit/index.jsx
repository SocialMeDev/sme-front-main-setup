import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'

import { Icon } from 'components'

const DocumentLegalLawEdit = createIcon({
  displayName: 'DocumentLegalLawEdit',
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
        <path d="M9 21h-4l-8.74228e-08-3.55271e-15c-1.10457-4.82823e-08-2-.895431-2-2 0 0 0 0 0 0v-14l2.30926e-14 3.01992e-07c-1.66785e-07-1.10457.89543-2 2-2h12l-8.74228e-08 1.77636e-15c1.10457-4.82823e-08 2 .89543 2 2v3"></path>
        <line x1="7" x2="13" y1="8" y2="8"></line>
        <line x1="7" x2="9" y1="12" y2="12"></line>
      </g>
      <path fill="none" d="M0 0h24v24h-24Z"></path>
      <path
        d="M12 21l2.625-.324 6.96085e-08-8.78101e-09c.184484-.0232724.356076-.106958.488-.238l6.359-6.359 2.22146e-08-2.21202e-08c.704439-.701445.706866-1.84114.00542132-2.54558 -.00180327-.00181097-.00361039-.00361809-.00542136-.00542136v0l7.37681e-08 7.4083e-08c-.701445-.704439-1.84114-.706867-2.54558-.00542151 -.00181097.00180327-.00361809.00361039-.00542136.00542136l-6.3 6.3 -7.14094e-10 7.14444e-10c-.127622.127685-.210426.293292-.236.472Z"
        strokeLinecap="round"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        strokeLinejoin="round"
      ></path>
    </>
  )
})

function CustomIcon({ ...rest }) {
  return <Icon as={DocumentLegalLawEdit} {...rest} />
}

export default memo(CustomIcon)
