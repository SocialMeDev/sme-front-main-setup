import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'
import Theme from 'styles/theme'

const EditPenMenuSquare = createIcon({
  defaultProps: Theme.components.Icon.baseStyle,
  displayName: 'EditPenMenuSquare',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path
        d="M16,21H8a5,5,0,0,1-5-5V8A5,5,0,0,1,8,3h8a5,5,0,0,1,5,5v8A5,5,0,0,1,16,21Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M14,17H11.95472V14.95472a.78882.78882,0,0,1,.23174-.55917l3.16361-3.16362a.79.79,0,0,1,1.11834,0l1.25438,1.25438a.79.79,0,0,1,0,1.11834l-3.16362,3.16361A.79214.79214,0,0,1,14,17Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <line
        x1="9"
        y1="14"
        x2="6.95472"
        y2="14"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <line
        x1="11"
        y1="11"
        x2="6.95472"
        y2="11"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <line
        x1="13"
        y1="8"
        x2="6.95472"
        y2="8"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <rect width="24" height="24" fill="none" />
    </>
  )
})

export default memo(EditPenMenuSquare)
