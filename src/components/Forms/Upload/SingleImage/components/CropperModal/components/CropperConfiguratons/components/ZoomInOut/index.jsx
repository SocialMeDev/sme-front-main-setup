import { memo } from 'react'

import { Flex, IconButton, Text } from 'components'
import { SearchZoomPlus, SearchMinus } from 'components/Icons/Interface'

function ZoomInOut({ cropper }) {
  return (
    <Flex
      p={1}
      w="100%"
      borderBottomWidth="1px"
      borderColor="borderColor"
      justify="space-between"
      align="center"
    >
      <Text>Zoom</Text>

      <Flex align="center" gap={2}>
        <IconButton
          variant="ghost"
          onClick={() => cropper.zoom(0.1)}
          icon={<SearchZoomPlus />}
        />

        <IconButton
          variant="ghost"
          onClick={() => cropper.zoom(-0.1)}
          icon={<SearchMinus />}
        />
      </Flex>
    </Flex>
  )
}

export default memo(ZoomInOut)
