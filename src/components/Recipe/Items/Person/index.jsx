import { memo } from 'react'

import { Box, Flex, Avatar, Text } from 'components'
import { getFormattedAvatarUrl } from 'utils/transforms/string'

function PersonItem({ user, src, primaryText, secondaryText, ...rest }) {
  return (
    <Flex align="center" gap={2} {...rest}>
      <Avatar src={src || getFormattedAvatarUrl(user)} />
      <Box>
        <Text>{primaryText}</Text>
        <Text variant="secondary">{secondaryText}</Text>
      </Box>
    </Flex>
  )
}

export default memo(PersonItem)
