import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'

import { Icon } from 'components'

const MedicalCaseAidKit = createIcon({
  displayName: 'MedicalCaseAidKit',
  viewBox: '0 0 24 24',
  path: (
    <>
      <g fill="none">
        <path d="M0,0h24v24h-24Z"></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M5,7h14c1.105,0 2,0.895 2,2v9c0,1.105 -0.895,2 -2,2h-14c-1.105,0 -2,-0.895 -2,-2v-9c0,-1.105 0.895,-2 2,-2Z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9.5,13.5h5"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12,11v5"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M16,7l-0.621,-2.485c-0.223,-0.89 -1.023,-1.515 -1.941,-1.515h-2.877c-0.918,0 -1.718,0.625 -1.94,1.515l-0.621,2.485"
        ></path>
      </g>
    </>
  )
})

function CustomIcon({ ...rest }) {
  return <Icon as={MedicalCaseAidKit} {...rest} />
}

export default memo(CustomIcon)
