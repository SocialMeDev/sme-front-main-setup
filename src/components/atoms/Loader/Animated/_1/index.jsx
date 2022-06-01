import { memo } from 'react'
import { Box, Flex, keyframes, useColorModeValue } from '@chakra-ui/react'

import LoadText from './components/LoadText'

function WifiLoader({ text, primaryColor, secondaryColor }) {
  const animationDuration = '2s'
  const primaryColorDefault = 'primary.500'
  const secondaryColorDefault = useColorModeValue('gray.100', 'gray.900')

  const circleOuter = keyframes`
  0% {
    stroke-dashoffset: 25;
  }
  25% {
    stroke-dashoffset: 0;
  }
  65% {
    stroke-dashoffset: 301;
  }
  80% {
    stroke-dashoffset: 276;
  }
  100% {
    stroke-dashoffset: 276;
  }
  `
  const circleMiddle = keyframes`
  0% {
    stroke-dashoffset: 17;
  }
  25% {
    stroke-dashoffset: 0;
  }
  65% {
    stroke-dashoffset: 204;
  }
  80% {
    stroke-dashoffset: 187;
  }
  100% {
    stroke-dashoffset: 187;
  }
  `

  const circleInner = keyframes`
  0% {
    stroke-dashoffset: 9;
  }
  25% {
    stroke-dashoffset: 0;
  }
  65% {
    stroke-dashoffset: 106;
  }
  80% {
    stroke-dashoffset: 97;
  }
  100% {
    stroke-dashoffset: 97;
  }
  `

  return (
    <Flex
      minW="64px"
      minH="64px"
      w="200px"
      pos="relative"
      justify="center"
      align="center"
    >
      <Flex
        as="svg"
        viewBox="0 0 86 86"
        pos="absolute"
        justify="center"
        align="center"
        h="86px"
        w="86px"
      >
        <Box
          as="circle"
          cx="43"
          cy="43"
          r="40"
          pos="absolute"
          fill="none"
          strokeWidth="6px"
          strokeLinejoin="round"
          strokeLinecap="round"
          transform="rotate(-100deg)"
          transformOrigin="center"
          stroke={secondaryColor || secondaryColorDefault}
          strokeDasharray="62.75 188.25"
          animation={`${circleOuter} ${animationDuration} ease infinite 0.3s`}
        />
        <Box
          as="circle"
          cx="43"
          cy="43"
          r="40"
          pos="absolute"
          fill="none"
          strokeWidth="6px"
          strokeLinejoin="round"
          strokeLinecap="round"
          transform="rotate(-100deg)"
          transformOrigin="center"
          stroke={primaryColor || primaryColorDefault}
          strokeDasharray="62.75 188.25"
          animation={`${circleOuter} ${animationDuration} ease infinite 0.15s`}
        />
        <Box
          as="circle"
          cx="43"
          cy="43"
          r="40"
          pos="absolute"
          fill="none"
          strokeWidth="6px"
          strokeLinejoin="round"
          strokeLinecap="round"
          transform="rotate(-100deg)"
          transformOrigin="center"
          strokeDasharray="62.75 188.25"
        />
      </Flex>

      <Flex
        as="svg"
        viewBox="0 0 60 60"
        pos="absolute"
        justify="center"
        align="center"
        h="60px"
        w="60px"
      >
        <Box
          as="circle"
          cx="30"
          cy="30"
          r="27"
          pos="absolute"
          fill="none"
          strokeWidth="6px"
          strokeLinejoin="round"
          strokeLinecap="round"
          transform="rotate(-100deg)"
          transformOrigin="center"
          stroke={secondaryColor || secondaryColorDefault}
          strokeDasharray="42.5 127.5"
          animation={`${circleMiddle} ${animationDuration} ease infinite 0.25s`}
        />
        <Box
          as="circle"
          cx="30"
          cy="30"
          r="27"
          pos="absolute"
          fill="none"
          strokeWidth="6px"
          strokeLinejoin="round"
          strokeLinecap="round"
          transform="rotate(-100deg)"
          transformOrigin="center"
          stroke={primaryColor || primaryColorDefault}
          strokeDasharray="42.5 127.5"
          animation={`${circleMiddle} ${animationDuration} ease infinite 0.1s`}
        />
      </Flex>

      <Flex
        as="svg"
        viewBox="0 0 34 34"
        pos="absolute"
        justify="center"
        align="center"
        h="34px"
        w="34px"
      >
        <Box
          as="circle"
          cx="17"
          cy="17"
          r="14"
          pos="absolute"
          fill="none"
          strokeWidth="6px"
          strokeLinejoin="round"
          strokeLinecap="round"
          transform="rotate(-100deg)"
          transformOrigin="center"
          stroke={secondaryColor || secondaryColorDefault}
          strokeDasharray="22 66"
          animation={`${circleInner} ${animationDuration} ease infinite 0.2s`}
        />
        <Box
          as="circle"
          cx="17"
          cy="17"
          r="14"
          pos="absolute"
          fill="none"
          strokeWidth="6px"
          strokeLinejoin="round"
          strokeLinecap="round"
          transform="rotate(-100deg)"
          transformOrigin="center"
          stroke={primaryColor || primaryColorDefault}
          strokeDasharray="22 66"
          animation={`${circleInner} ${animationDuration} ease infinite 0.05s`}
        />
      </Flex>
      {text && (
        <LoadText
          text={text}
          primaryColor={primaryColor || primaryColorDefault}
          secondaryColor={secondaryColor || secondaryColorDefault}
        />
      )}
    </Flex>
  )
}

export default memo(WifiLoader)
