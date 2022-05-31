import { memo, useMemo } from 'react'
import { keyframes } from '@chakra-ui/react'

import { Stack, Box, Text } from 'components'
import { sizes } from './style'
import { useSizeValue } from 'hooks'

function BadgeWithDot({
  status = 'success',
  size = useSizeValue('sm', 'md', 'lg'),
  color,
  fontSize,
  text,
  ripple,
  ...rest
}) {
  const ringScaleMin = 0.33
  const ringScaleMax = 0.66

  const pulseAnimations = useMemo(() => {
    return {
      ring: keyframes`
            0% {
              transform: scale(${ringScaleMin});
            }
            30% {
              transform: scale(${ringScaleMax});
            },
            40%,
            50% {
              opacity: 0;
            }
            100% {
              opacity: 0;
            }
          `,
      dot: keyframes`
        0% {
          transform: scale(0.9);
        }
        25% {
          transform: scale(1.1);
        }
        50% {
          transform: scale(0.9);
        }
        100% {
          transform: scale(0.9);
        }`
    }
  }, [])

  return (
    <Stack align="center" direction="row" {...rest}>
      <Box
        rounded="full"
        bg={status}
        as="div"
        position="relative"
        borderRadius="50%"
        _before={
          ripple && {
            content: "''",
            position: 'relative',
            display: 'block',
            width: '400%',
            height: '400%',
            boxSizing: 'border-box',
            marginLeft: '-150%',
            marginTop: '-150%',
            borderRadius: '50%',
            bgColor: status,
            animation: `2.25s ${pulseAnimations.ring} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`
          }
        }
        _after={
          ripple && {
            animation: `2.25s ${pulseAnimations.dot} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`
          }
        }
        {...sizes[size]}
      />
      {text && (
        <Text fontSize={fontSize} color={color}>
          {text}
        </Text>
      )}
    </Stack>
  )
}

export default memo(BadgeWithDot)
