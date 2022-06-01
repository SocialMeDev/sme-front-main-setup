import { memo } from 'react'

import { Flex, Text, Icon } from 'components'
import { GridLayout17 } from 'components/Icons/Interface'
import { useSizeValue } from 'hooks'

function MenuGroupTitle({ name, icon }) {
  return (
    <Flex align="center" justify="center" h="30px">
      <Icon
        boxSize={useSizeValue('4', '5', '6')}
        as={icon || GridLayout17}
        color="borderColor"
        transition="all 0.2s"
      />

      <Text
        textTransform="uppercase"
        color="borderColor"
        transition="font-size 0.4s"
      >
        {name}
      </Text>
    </Flex>
  )
}

export default memo(MenuGroupTitle)
