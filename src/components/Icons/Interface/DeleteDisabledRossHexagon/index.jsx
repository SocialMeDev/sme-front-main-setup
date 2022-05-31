import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'

import { Icon } from 'components'

const DeleteDisabledRossHexagon = createIcon({
  displayName: 'DeleteDisabledRossHexagon',
  viewBox: '0 0 24 24',
  path: (
    <>
      <g fill="none">
        <path d="M0 0h24v24h-24Z"></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M7.414 20.414l-3.828-3.828c-.375-.375-.586-.884-.586-1.414v-6.344c0-.53.211-1.039.586-1.414l3.828-3.828c.375-.375.884-.586 1.414-.586h6.343c.53 0 1.039.211 1.414.586l3.828 3.828c.376.375.587.884.587 1.414v6.343c0 .53-.211 1.039-.586 1.414l-4.414 4.415h-7.172c-.53 0-1.039-.211-1.414-.586Z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9 15l6-6"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M15 15l-6-6"
        ></path>
      </g>
    </>
  )
})

function CustomIcon({ ...rest }) {
  return <Icon as={DeleteDisabledRossHexagon} {...rest} />
}

export default memo(CustomIcon)
