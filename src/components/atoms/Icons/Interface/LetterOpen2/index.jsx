import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'
import Theme from 'styles/theme'

const LetterOpen2 = createIcon({
  defaultProps: Theme.components.Icon.baseStyle,
  displayName: 'LetterOpen2',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path xmlns="http://www.w3.org/2000/svg" d="M0,0H24V24H0Z" fill="none" />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M20.216,8.77251l-7-5.36041a2,2,0,0,0-2.43194,0l-7,5.36041A2,2,0,0,0,3,10.36041V19a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V10.36041A2,2,0,0,0,20.216,8.77251Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M3.18771,9.51717,8.50353,13.5879A2,2,0,0,0,9.71951,14H14.279a2,2,0,0,0,1.216-.4121l5.31668-4.07136"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M3.17373,19.81921l5.28568-5.23959A2,2,0,0,1,9.86743,14h4.2682a2,2,0,0,1,1.40843.58l5.28108,5.23817"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </>
  )
})

export default memo(LetterOpen2)
