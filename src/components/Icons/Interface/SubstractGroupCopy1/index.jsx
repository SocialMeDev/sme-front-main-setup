import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'

import { Icon } from 'components'

const SubstractGroupCopy1 = createIcon({
  displayName: 'SubstractGroupCopy1',
  viewBox: '0 0 24 24',
  path: (
    <>
      <g fill="none">
        <path d="M24 0v24h-24v-24h24Z"></path>
        <path d="M0 24v-24h24v24h-24Z"></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M11 8v-1.667c0-.736.597-1.333 1.333-1.333h5.333c.737 0 1.334.597 1.334 1.333v5.333c0 .737-.597 1.334-1.333 1.334h-1.667"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M5 17.667v-5.333c0-.737.597-1.334 1.333-1.334h5.333c.737 0 1.334.597 1.334 1.333v5.333c0 .737-.597 1.334-1.333 1.334h-5.334c-.736 0-1.333-.597-1.333-1.333Z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M2.77 9.538c.88-3.298 3.47-5.888 6.768-6.768"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M15.198 21c2.708-.961 4.841-3.094 5.802-5.802"
        ></path>
      </g>
    </>
  )
})

function CustomIcon({ ...rest }) {
  return <Icon as={SubstractGroupCopy1} {...rest} />
}

export default memo(CustomIcon)
