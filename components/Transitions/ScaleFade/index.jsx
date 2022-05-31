import { memo } from 'react'
import { ScaleFade } from '@chakra-ui/react'

function ScaleFadeDefault({
  children,
  show = true,
  initialScale = 0.8,
  reverse,
  ...rest
}) {
  return (
    <ScaleFade
      in={show}
      initialScale={initialScale}
      reverse={reverse}
      {...rest}
    >
      {children}
    </ScaleFade>
  )
}

export default memo(ScaleFadeDefault)
