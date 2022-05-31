import { memo } from 'react'
import { Box } from '@chakra-ui/react'

function TapeCard({
  children,
  tapeLabel = 'Fita',
  tapeColor = 'lightColor',
  tapeBg = '#63BCED',
  ...rest
}) {
  return (
    <Box position="relative" rounded="md" w="full" bg="red" {...rest}>
      <Box
        as="span"
        position="absolute"
        top="-10px"
        left="-10px"
        minW="150px"
        minH="150px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        _before={{
          position: 'absolute',
          content: `"${tapeLabel}"`,
          w: '150%',
          h: '40px',
          bg: tapeBg,
          transform: 'rotate(-45deg) translateY(-20px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          boxShadow: 'md',
          color: tapeColor
        }}
        _after={{
          position: 'absolute',
          content: '""',
          bottom: 0,
          left: 0,
          zIndex: '-1',
          w: '10px',
          h: '10px',
          bg: tapeBg,
          boxShadow: `140px -140px ${tapeBg}`
        }}
      />
      {children}
    </Box>
  )
}

export default memo(TapeCard)
