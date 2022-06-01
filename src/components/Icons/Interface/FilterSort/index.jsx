import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'

import { Icon } from 'components'

const FilterSort = createIcon({
  displayName: 'FilterSort',
  viewBox: '0 0 24 24',
  path: (
    <>
      <g fill="none">
        <path d="M0 0h24v24h-24v-24Z"></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M19.91 9h-15.82"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M15.202 13.036v4.76c0 .672-.38 1.289-.983 1.589l-2.848 1.424c-1.182.592-2.572-.268-2.572-1.589v-6.184l-4.107-3.168c-.436-.337-.692-.856-.692-1.408v-2.682c0-.982.796-1.778 1.778-1.778h12.444c.982 0 1.778.796 1.778 1.778v2.682c0 .551-.256 1.07-.692 1.408l-4.106 3.168Z"
        ></path>
      </g>
    </>
  )
})

function CustomIcon({ ...rest }) {
  return <Icon as={FilterSort} {...rest} />
}

export default memo(CustomIcon)
