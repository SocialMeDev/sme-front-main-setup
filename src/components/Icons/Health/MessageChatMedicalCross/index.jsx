import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'

import { Icon } from 'components'

const MessageChatMedicalCross = createIcon({
  displayName: 'MessageChatMedicalCross',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path
        d="M4.62892,17.16368a8.99979,8.99979,0,1,1,2.20679,2.2067l-2.83727.63045Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M16,11.2a.8.8,0,0,0-.8-.8H13.6V8.8a.8.8,0,0,0-.8-.8H11.2a.8.8,0,0,0-.8.8v1.6H8.8a.8.8,0,0,0-.8.8v1.6a.8.8,0,0,0,.8.8h1.6v1.6a.8.8,0,0,0,.8.8h1.6a.8.8,0,0,0,.8-.8V13.6h1.6a.8.8,0,0,0,.8-.8Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <rect width="24" height="24" fill="none" />
    </>
  )
})

function CustomIcon({ ...rest }) {
  return <Icon as={MessageChatMedicalCross} {...rest} />
}

export default memo(CustomIcon)
