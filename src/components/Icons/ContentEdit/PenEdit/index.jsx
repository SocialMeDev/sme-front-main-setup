import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'

import { Icon } from 'components'

const PenEdit = createIcon({
  displayName: 'PenEdit',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path d="M0,0h24v24h-24Z" fill="none" fillRule="evenodd"></path>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M5.293,15.619l10.326,-10.326c0.39,-0.39 1.023,-0.39 1.413,8.88178e-16l1.676,1.676c0.39,0.39 0.39,1.023 0,1.413l-10.327,10.325c-0.187,0.188 -0.441,0.293 -0.706,0.293h-2.675v-2.675c0,-0.265 0.105,-0.519 0.293,-0.706Z"
      ></path>
      <path
        d="M13.75,7.16l3.09,3.09"
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
  return <Icon as={PenEdit} {...rest} />
}

export default memo(CustomIcon)
