import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'

import { Icon } from 'components'

const ListParagraphSearch = createIcon({
  displayName: 'ListParagraphSearch',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path
        d="M4,14.5H8"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M4,19.5H20"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M4,4.5H20"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M4,9.5H8"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M15.5,8A3.5,3.5,0,1,1,12,11.5,3.4998,3.4998,0,0,1,15.5,8"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M18,14l2,2-2-2"
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
  return <Icon as={ListParagraphSearch} {...rest} />
}

export default memo(CustomIcon)
