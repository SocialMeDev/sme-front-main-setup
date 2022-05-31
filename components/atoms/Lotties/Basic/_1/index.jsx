import { memo, useMemo } from 'react'
import { Box, useBreakpointValue } from '@chakra-ui/react'
import Lottie from 'react-lottie'

function Lotties({ src, options, height, width, ...rest }) {
  const defaultOptions = useMemo(() => {
    return {
      loop: false,
      autoplay: true,
      animationData: src,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }
  }, [])

  const defaultHeight = useBreakpointValue({ base: 150, md: 250 })
  const defaultWidth = useBreakpointValue({ base: 250, md: 250 })

  return (
    <Box {...rest}>
      <Lottie
        options={options || defaultOptions}
        height={height || defaultHeight}
        width={width || defaultWidth}
      />
    </Box>
  )
}

export default memo(Lotties)
