import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'

import { Icon } from 'components'

const BookReadUserPerson = createIcon({
  displayName: 'BookReadUserPerson',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path d="M24,24H0V0H24Z" fill="none" />
      <path
        d="M4.50012,12.5l0-1.74592A1.24694,1.24694,0,0,1,5.82092,9.502,13.24815,13.24815,0,0,1,12,11.25662,13.24815,13.24815,0,0,1,18.17908,9.502a1.24694,1.24694,0,0,1,1.32085,1.25211L19.5,12.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M4.50007,16.5l0,1.71513a1.00523,1.00523,0,0,0,.96405.9977A12.45227,12.45227,0,0,1,12,21a12.45227,12.45227,0,0,1,6.53592-1.78717,1.00523,1.00523,0,0,0,.96405-.9977l0-1.71513"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M12,11.25662V21"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <circle
        cx="12"
        cy="4.75"
        r="2.75"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M4,12.5H5a2,2,0,0,1,2,2v0a2,2,0,0,1-2,2H4a1,1,0,0,1-1-1v-2A1,1,0,0,1,4,12.5Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M18,12.5h1a2,2,0,0,1,2,2v0a2,2,0,0,1-2,2H18a1,1,0,0,1-1-1v-2A1,1,0,0,1,18,12.5Z"
        transform="translate(38 29) rotate(180)"
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
  return <Icon as={BookReadUserPerson} {...rest} />
}

export default memo(CustomIcon)
