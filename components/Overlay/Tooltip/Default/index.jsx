import { memo, forwardRef } from 'react'

import { Tooltip, Box } from '@chakra-ui/react'

import { useSizeValue } from 'hooks'

const TooltipDefault = forwardRef(
  (
    {
      maxW,
      children,
      hasArrow = true,
      placement = 'top',
      fontSize = useSizeValue('sm', 'md', 'lg'),
      label = '...',
      ...rest
    },
    ref
  ) => {
    return (
      <Tooltip
        ref={ref}
        label={label}
        hasArrow={hasArrow}
        placement={placement}
        fontSize={fontSize}
        {...rest}
      >
        <Box maxW={maxW}>{children}</Box>
      </Tooltip>
    )
  }
)

export default memo(TooltipDefault)
