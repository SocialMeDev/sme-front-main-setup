import { Flex, keyframes } from '@chakra-ui/react'

export default function WifiLoaderText({ text, primaryColor, secondaryColor }) {
  const animationDuration = '3.6s'

  const textAnimation = keyframes`
  0% {
    -webkit-clip-path: inset(0 100% 0 0);
            clip-path: inset(0 100% 0 0);
  }
  50% {
    -webkit-clip-path: inset(0);
            clip-path: inset(0);
  }
  100% {
    -webkit-clip-path: inset(0 0 0 100%);
            clip-path: inset(0 0 0 100%);
  }
  `

  return (
    <Flex
      data-text={text}
      pos="absolute"
      bottom="-40px"
      justify="center"
      align="center"
      fontWeight="500"
      fontSize="14px"
      letterSpacing="0.2px"
      _after={{
        content: 'attr(data-text)',
        color: primaryColor,
        position: 'absolute',
        left: 0,
        animation: `${textAnimation} ${animationDuration} ease infinite`
      }}
      _before={{
        content: 'attr(data-text)',
        color: secondaryColor
      }}
    />
  )
}
