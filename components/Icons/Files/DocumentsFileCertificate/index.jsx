import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'

import { Icon } from 'components'

const DocumentsFileCertificate = createIcon({
  displayName: 'DocumentsFileCertificate',
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
        <path d="M19 12.981v-5.153c0-.53-.211-1.039-.586-1.414l-2.828-2.828c-.375-.375-.884-.586-1.414-.586h-7.172c-1.105 0-2 .895-2 2v14c0 1.105.895 2 2 2h7.868"></path>
        <path d="M19 8h-4c-.552 0-1-.448-1-1v-4"></path>
        <path d="M18.556 16.223l-1.945 1.945 -1.167-1.167"></path>
        <path d="M12.275 17.814l.664.869 .144 1.081c.08.6.551 1.072 1.151 1.152l1.084.145 .868.664c.48.367 1.147.367 1.627 0l.869-.664h-.001l1.082-.144c.6-.08 1.072-.551 1.152-1.151l.145-1.084c0 .001.336-.439.664-.868 .367-.48.367-1.147 0-1.627l-.664-.869 -.144-1.081c-.08-.6-.551-1.072-1.151-1.152l-1.084-.145 -.868-.664c-.48-.367-1.147-.367-1.627 0l-.869.664h.001l-1.082.144c-.6.08-1.072.551-1.152 1.151l-.145 1.084c0-.001-.336.439-.664.868 -.367.48-.367 1.146-3.55271e-15 1.627Z"></path>
      </g>
      <path fill="none" d="M0 0h24v24h-24v-24Z"></path>
    </>
  )
})

function CustomIcon({ ...rest }) {
  return <Icon as={DocumentsFileCertificate} {...rest} />
}

export default memo(CustomIcon)
