import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'
import Theme from 'styles/theme'

const Input1 = createIcon({
  defaultProps: Theme.components.Icon.baseStyle,
  displayName: 'Input1',
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
          d="M12 15l3.5-7"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M19 15l-3.5-7"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12.7 13.6h5.6"
        ></path>
        <path
          fillRule="evenodd"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M11 4h-1c-1.105 0-2 .895-2 2 0-1.105-.895-2-2-2h-1"
        ></path>
        <path
          fillRule="evenodd"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M11 20h-1c-1.105 0-2-.895-2-2 0 1.105-.895 2-2 2h-1"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M8 18v-12"
        ></path>
      </g>
    </>
  )
})

export default memo(Input1)
