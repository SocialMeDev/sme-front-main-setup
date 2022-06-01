import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'

import { Icon } from 'components'

const ListParagraphDotsCheckmark = createIcon({
  displayName: 'ListParagraphDotsCheckmark',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path
        d="M12,12h8"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M12,19h8"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M12,5h8"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M4.8,4.8,6.00107,6,8,4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M6.5,12.00063A.5.5,0,1,1,5.99937,11.5.5.5,0,0,1,6.5,12.00063"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M6.5,19.00063A.5.5,0,1,1,5.99937,18.5.5.5,0,0,1,6.5,19.00063"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path d="M0,0H24V24H0Z" fill="none" />
    </>
  )
})

function CustomIcon({ ...rest }) {
  return <Icon as={ListParagraphDotsCheckmark} {...rest} />
}

export default memo(CustomIcon)
