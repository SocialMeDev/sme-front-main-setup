import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'

import { Icon } from 'components'

const UserProfileSetting1 = createIcon({
  displayName: 'UserProfileSetting1',
  viewBox: '0 0 24 24',
  path: (
    <>
      <g
        strokeLinecap="round"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        strokeLinejoin="round"
      >
        <circle cx="7" cy="5.25" r="2.25"></circle>
        <path d="M5 16v4c0 .552.448 1 1 1h2c.552 0 1-.448 1-1v-4l1.055-.703c.278-.185.445-.498.445-.832v-3.465c0-.552-.448-1-1-1h-5c-.552 0-1 .448-1 1v3.465c0 .334.167.647.445.832l1.055.703Z"></path>
        <line x1="14.5" x2="20.5" y1="5" y2="5"></line>
        <line x1="14.5" x2="20.5" y1="8" y2="8"></line>
        <line x1="14.5" x2="18.5" y1="11" y2="11"></line>
      </g>
      <path fill="none" d="M0 0h24v24h-24v-24Z"></path>
    </>
  )
})

function CustomIcon({ ...rest }) {
  return <Icon as={UserProfileSetting1} {...rest} />
}

export default memo(CustomIcon)
