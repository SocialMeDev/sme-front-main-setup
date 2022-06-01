import { memo } from 'react'
import { Center, Flex, Text, Spinner } from 'components'

function LoaderDefault({
  direction = 'column',
  text,
  size,
  fontSize,
  isLoading,
  color = 'primary',
  children,
  ...rest
}) {
  if (isLoading || !children) {
    return (
      <Center {...rest}>
        <Flex direction={direction} align="center" gap={4}>
          <Spinner size={size} color={color} />
          <Text fontSize={fontSize} color={color}>
            {text}
          </Text>
        </Flex>
      </Center>
    )
  }
  return children
}

export default memo(LoaderDefault)
