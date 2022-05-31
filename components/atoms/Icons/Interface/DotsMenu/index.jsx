import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'
import Theme from 'styles/theme'

const DotsMenu = createIcon({
  defaultProps: Theme.components.Icon.baseStyle,
  displayName: 'DotsMenu',
  viewBox: '0 0 24 24',
  path: (
    <>
      <g
        xmlns="http://www.w3.org/2000/svg"
        strokeLinecap="round"
        strokeWidth="1.5"
        stroke="currentCOlor"
        fill="none"
        strokeLinejoin="round"
      >
        <path d="M18.5 12v0c0 .276142-.223858.5-.5.5 -.276142 0-.5-.223858-.5-.5 0-.276142.223858-.5.5-.5h-2.18557e-08c.276142-1.20706e-08.5.223858.5.5" />
        <path d="M12.5 12v0c0 .276142-.223858.5-.5.5 -.276142 0-.5-.223858-.5-.5 0-.276142.223858-.5.5-.5h-2.18557e-08c.276142-1.20706e-08.5.223858.5.5" />
        <path d="M6.5 12v0c0 .276142-.223858.5-.5.5 -.276142 0-.5-.223858-.5-.5 0-.276142.223858-.5.5-.5h-2.18557e-08c.276142-1.20706e-08.5.223858.5.5" />
      </g>
      <path
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        d="M24 0v24h-24v-24Z"
      />
    </>
  )
})

export default memo(DotsMenu)
