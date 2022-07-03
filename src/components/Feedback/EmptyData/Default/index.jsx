import { memo } from 'react'

import EmptyBox from './files/empty-box.json'

import { Lottie, Flex, Heading, Text } from 'components'

function EmptyData({
  title,
  description,
  children,
  size,
  fontSize,
  height = '300px',
  ...rest
}) {
  return (
    <Flex
      p={4}
      gap={2}
      height={height}
      direction="column"
      align="center"
      justify="center"
      {...rest}
    >
      <Lottie size={size} src={EmptyBox} />
      <Flex direction="column" align="center" justify="center" gap={2}>
        <Heading textAlign="center" size={fontSize}>
          {title}
        </Heading>

        {description && <Text textAlign="center">{description}</Text>}
        {children}
      </Flex>
    </Flex>
  )
}

export default memo(EmptyData)
