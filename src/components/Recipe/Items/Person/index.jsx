import { memo } from 'react'

import { Box, Flex, Avatar, Text } from 'components'
import {
  capitalizeString,
  getFormattedAvatarUrl
} from 'utils/transforms/string'

function PersonItem({
  person,
  user,
  src,
  primaryText,
  secondaryText,
  ...rest
}) {
  return (
    <Flex align="center" gap={2} {...rest}>
      <Avatar src={src || getFormattedAvatarUrl(person || user)} />
      <Box>
        <Text>{capitalizeString(primaryText)}</Text>
        <Text textAlign="left" variant="secondary">
          {secondaryText}
        </Text>
      </Box>
    </Flex>
  )
}

export default memo(PersonItem)
