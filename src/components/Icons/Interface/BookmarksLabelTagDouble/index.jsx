import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'

import { Icon } from 'components'

const BookmarksLabelTagDouble = createIcon({
  displayName: 'BookmarksLabelTagDouble',
  viewBox: '0 0 24 24',
  path: (
    <>
      <defs>
        <path d="M24 0h-24v24h24v-24Z" id="a"></path>
      </defs>
      <g fill="none">
        <use xlinkHref="#a"></use>
        <use xlinkHref="#a"></use>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9.16451 10.1455c.143322.143322.143322.375694 0 .519016 -.143322.143322-.375694.143322-.519016 0 -.143322-.143322-.143322-.375694 0-.519016 .143322-.143322.375694-.143322.519016 0"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M11.71 6.29l7.21 7.21c.772.772.772 2.024 0 2.796l-4.124 4.124c-.772.772-2.024.772-2.796 0l-7.21-7.21c-.185-.185-.29-.437-.29-.699v-5.522c-3.55271e-15-.546.443-.989.989-.989h5.523c.262 0 .513.104.698.29Z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M19.5 10l-6.506-6.423c-.375-.37-.879-.577-1.405-.577h-4.089"
        ></path>
      </g>
    </>
  )
})

function CustomIcon({ ...rest }) {
  return <Icon as={BookmarksLabelTagDouble} {...rest} />
}

export default memo(CustomIcon)
