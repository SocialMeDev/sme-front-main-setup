import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'

import { Icon } from 'components'

const FunctionNotice = createIcon({
  displayName: 'FunctionNotice',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M16.5,21H5a2,2,0,0,1-2-2V18a1,1,0,0,1,1-1H14a1,1,0,0,1,1,1v1.5A1.5,1.5,0,0,0,16.5,21h0A1.5,1.5,0,0,0,18,19.5V6.5A1.5,1.5,0,0,1,19.5,5h0A1.5,1.5,0,0,1,21,6.5V9a1,1,0,0,1-1,1H18"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M6,8.82684V17"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <circle
        xmlns="http://www.w3.org/2000/svg"
        cx="7"
        cy="6"
        r="3"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M19.5,5H9.82742"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <rect
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      />
    </>
  )
})

function CustomIcon({ ...rest }) {
  return <Icon as={FunctionNotice} {...rest} />
}

export default memo(CustomIcon)
