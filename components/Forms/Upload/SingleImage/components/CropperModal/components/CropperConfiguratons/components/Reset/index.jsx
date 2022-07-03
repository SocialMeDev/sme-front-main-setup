import { memo } from 'react'

import { Flex, IconButton, Text } from 'components'
import { RefreshRotate3 } from 'components/Icons/Interface'

function Reset({ cropper }) {
  return (
    <Flex
      p={1}
      w="100%"
      borderBottomWidth="1px"
      borderColor="borderColor"
      justify="space-between"
      align="center"
    >
      <Text>Resetar</Text>

      <IconButton
        variant="ghost"
        onClick={() => cropper.reset()}
        icon={<RefreshRotate3 />}
      />
    </Flex>
  )
}

export default memo(Reset)
