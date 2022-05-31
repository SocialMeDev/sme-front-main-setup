import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'

import { Icon } from 'components'

const FilterSortAZ = createIcon({
  displayName: 'FilterSortAZ',
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
        <path d="M16.395 14.5h4.211l-4.211 5h4.211"></path>
        <path d="M21 9.5l-2.5-5 -2.5 5"></path>
        <path d="M16.419 8.662h4.162"></path>
        <path d="M12 19.5h-9"></path>
        <path d="M12 14.5h-9"></path>
        <path d="M12 9.5h-9"></path>
        <path d="M12 4.5h-9"></path>
      </g>
      <path fill="none" d="M24 24h-24v-24h24v24Z"></path>
    </>
  )
})

function CustomIcon({ ...rest }) {
  return <Icon as={FilterSortAZ} {...rest} />
}

export default memo(CustomIcon)
