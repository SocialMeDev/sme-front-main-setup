import { memo } from 'react'

import { Flex, IconButton, Text } from 'components'
import { RotateRefreshLoading2 } from 'components/Icons/Interface'

function Rotate({ cropper }) {
  return (
    <Flex
      p={1}
      w="100%"
      borderBottomWidth="1px"
      borderColor="borderColor"
      justify="space-between"
      align="center"
    >
      <Text>Rotação</Text>

      <Flex align="center" gap={2}>
        <IconButton
          variant="ghost"
          onClick={() => cropper.rotate(45)}
          icon={<RotateRefreshLoading2 transform="rotate(180deg)" />}
        />

        <IconButton
          variant="ghost"
          onClick={() => cropper.rotate(-45)}
          icon={<RotateRefreshLoading2 />}
        />
      </Flex>
    </Flex>
  )
}

export default memo(Rotate)
