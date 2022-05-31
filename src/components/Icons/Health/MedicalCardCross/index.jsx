import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'

import { Icon } from 'components'

const MedicalCardCross = createIcon({
  displayName: 'MedicalCardCross',
  viewBox: '0 0 24 24',
  path: (
    <>
      <rect x="0.00001" y="0.00001" width="24" height="24" fill="none" />
      <rect
        x="8.00001"
        y="2.00001"
        width="8"
        height="4"
        rx="1"
        strokeWidth="1.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M16,4h2a2,2,0,0,1,2,2V19a2,2,0,0,1-2,2H6a2,2,0,0,1-2-2V6A2,2,0,0,1,6,4H8"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <line
        x1="8.00001"
        y1="17.50001"
        x2="16.00001"
        y2="17.50001"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <line
        x1="16.00001"
        y1="14.50001"
        x2="8.00001"
        y2="14.50001"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <line
        x1="12.00001"
        y1="11.50001"
        x2="12.00001"
        y2="8.50001"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <line
        x1="13.50001"
        y1="10.00001"
        x2="10.50001"
        y2="10.00001"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </>
  )
})

function CustomIcon({ ...rest }) {
  return <Icon as={MedicalCardCross} {...rest} />
}

export default memo(CustomIcon)
