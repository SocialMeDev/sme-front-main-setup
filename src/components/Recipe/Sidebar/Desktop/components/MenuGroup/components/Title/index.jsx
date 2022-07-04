import { memo } from 'react'

import { Flex, Text, Tooltip, Icon } from 'components'
import { GridLayout17 } from 'components/Icons/Interface'
import { useSizeValue } from 'hooks'

function MenuGroupTitle({ isOpen, name, icon }) {
  return (
    <Flex align="center" justify="center" h="30px">
      <Tooltip
        gutter={12}
        placement="right"
        label={name}
        display={isOpen ? 'none' : 'block'}
      >
        <Flex align="center" justify="center">
          <Icon
            boxSize={isOpen ? '0' : useSizeValue('4', '5', '6')}
            as={icon || GridLayout17}
            color="borderColor"
            transition={`all 0.2s ${isOpen ? '0s' : '0.2s'}`}
          />
        </Flex>
      </Tooltip>

      {isOpen ? (
        <Text
          textTransform="uppercase"
          color="borderColor"
          transition="font-size 0.4s"
        >
          {name}
        </Text>
      ) : (
        <Text fontSize="0">{name}</Text>
      )}
    </Flex>
  )
}

export default memo(MenuGroupTitle)
