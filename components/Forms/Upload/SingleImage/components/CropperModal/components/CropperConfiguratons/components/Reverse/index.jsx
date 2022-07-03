import { memo, useState, useCallback } from 'react'

import { Flex, IconButton, Text } from 'components'
import {
  ArrangeFilterSort,
  ArrangeFilterSort1
} from 'components/Icons/ArrowsDiagrams'

function Reverse({ cropper }) {
  const [scaleX, setScaleX] = useState(-1)
  const [scaleY, setScaleY] = useState(-1)

  const onChangeScaleX = useCallback(() => {
    cropper.scaleX(scaleX)
    setScaleX(-scaleX)
  }, [cropper, scaleX])

  const onChangeScaleY = useCallback(() => {
    cropper.scaleY(scaleY)
    setScaleY(-scaleY)
  }, [cropper, scaleY])

  return (
    <Flex
      p={1}
      w="100%"
      borderBottomWidth="1px"
      borderColor="borderColor"
      justify="space-between"
      align="center"
    >
      <Text>Inverter</Text>

      <Flex align="center" gap={2}>
        <IconButton
          variant="ghost"
          onClick={onChangeScaleX}
          icon={<ArrangeFilterSort />}
        />

        <IconButton
          variant="ghost"
          onClick={onChangeScaleY}
          icon={<ArrangeFilterSort1 />}
        />
      </Flex>
    </Flex>
  )
}

export default memo(Reverse)
