import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'
import Theme from 'styles/theme'

const SettingsFilter = createIcon({
  defaultProps: Theme.components.Icon.baseStyle,
  displayName: 'SettingsFilter',
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
        <path d="M5 6v-3"></path>
        <path d="M5 21v-11"></path>
        <path d="M12 14v-11"></path>
        <path d="M12 21v-3"></path>
        <path d="M19 6v-3"></path>
        <path d="M19 21v-11"></path>
        <path d="M6.41421 6.58579c.781049.781049.781049 2.04738 0 2.82843 -.781049.781049-2.04738.781049-2.82843 0 -.781049-.781049-.781049-2.04738-4.44089e-16-2.82843 .781049-.781049 2.04738-.781049 2.82843-8.88178e-16"></path>
        <path d="M13.4142 14.5858c.781049.781049.781049 2.04738 0 2.82843 -.781049.781049-2.04738.781049-2.82843 0 -.781049-.781049-.781049-2.04738 0-2.82843 .781049-.781049 2.04738-.781049 2.82843 0"></path>
        <path d="M20.4142 6.58579c.781049.781049.781049 2.04738 0 2.82843 -.781049.781049-2.04738.781049-2.82843 0 -.781049-.781049-.781049-2.04738 0-2.82843 .781049-.781049 2.04738-.781049 2.82843-8.88178e-16"></path>
      </g>
      <path fill="none" d="M0 0h24v24h-24Z"></path>
    </>
  )
})

export default memo(SettingsFilter)
