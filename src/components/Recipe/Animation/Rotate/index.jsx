import { memo } from 'react'
import { keyframes } from '@chakra-ui/react'

import { Box } from 'components'

function Rotate({
  children,
  duration = '2s',
  timingFunction = 'infinite',
  delay = 'linear',
  direction = 'normal'
}) {
  const spin = keyframes`
        from { transform: rotate(360deg); }
        to { transform: rotate(0deg); }
    `

  const animation = `${spin} ${timingFunction} ${duration} ${delay} ${direction}`

  console.log(`animation`, animation)

  return (
    <Box w="max-content" animation={animation}>
      {children}
    </Box>
  )
}

export default memo(Rotate)
