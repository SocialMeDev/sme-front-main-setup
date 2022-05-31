import { memo, useMemo } from 'react'
import Lottie from 'react-lottie'

import { Box } from 'components'
import { useSizeValue } from 'hooks'

function CustomLottie({
  src,
  options,
  size = useSizeValue(80, 120, 160),
  ...rest
}) {
  const defaultOptions = useMemo(() => {
    return {
      loop: false,
      autoplay: true,
      animationData: src,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }
  }, [src])

  return (
    <Box {...rest}>
      <Lottie options={options || defaultOptions} height={size} width={size} />
    </Box>
  )
}

export default memo(CustomLottie)
