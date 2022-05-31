import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'

import { Icon } from 'components'

const AppApplication = createIcon({
  displayName: 'AppApplication',
  viewBox: '0 0 24 24',
  path: (
    <>
      <g xmlns="http://www.w3.org/2000/svg" fill="none">
        <rect width="24" height="24" />
        <line
          x1="17.21"
          x2="17.21"
          y1="9.5"
          y2="14.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <line
          x1="10.58"
          x2="10.58"
          y1="9.5"
          y2="14.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M10.579 9.5h2.227c.863 0 1.562.7 1.562 1.562v0c0 .863-.7 1.562-1.562 1.562h-2.227"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M7.737 14.5l-2.368-5 -2.369 5"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M19.112 6.5c-.23-.299-.474-.59-.748-.864 -3.515-3.515-9.213-3.515-12.728 0 -.274.274-.517.565-.748.864"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M4.888 17.5c.23.299.474.59.748.864 3.515 3.515 9.213 3.515 12.728 0 .274-.274.517-.565.748-.864"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M17.211 9.5h2.227c.862 0 1.562.7 1.562 1.562v0c0 .863-.7 1.562-1.562 1.562h-2.227"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M3.474 13.5h3.789"
        />
      </g>
    </>
  )
})

function CustomIcon({ ...rest }) {
  return <Icon as={AppApplication} {...rest} />
}

export default memo(CustomIcon)
