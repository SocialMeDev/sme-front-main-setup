import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'
import Theme from 'styles/theme'

const ColorDesignProfile = createIcon({
  defaultProps: Theme.components.Icon.baseStyle,
  displayName: 'ColorDesignProfile',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path d="M0,0H24V24H0Z" fill="none" />
      <circle
        cx="12"
        cy="8.5"
        r="5.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M17.24829,10.14771A5.49723,5.49723,0,1,1,12,19.26709"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M6.75171,10.14771a5.49363,5.49363,0,1,0,6.49658,3.70458"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </>
  )
})

export default memo(ColorDesignProfile)
