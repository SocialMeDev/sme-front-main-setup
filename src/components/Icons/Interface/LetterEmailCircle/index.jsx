import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'

import { Icon } from 'components'

const LetterEmailCircle = createIcon({
  displayName: 'LetterEmailCircle',
  viewBox: '0 0 24 24',
  path: (
    <>
      <rect
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      />
      <circle
        xmlns="http://www.w3.org/2000/svg"
        cx="12"
        cy="12"
        r="9"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <rect
        xmlns="http://www.w3.org/2000/svg"
        x="7"
        y="8.25"
        width="10"
        height="7.5"
        rx="1.5"
        strokeWidth="1.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M9.57919,11l2.43212,1.5L14.57919,11"
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
  return <Icon as={LetterEmailCircle} {...rest} />
}

export default memo(CustomIcon)
