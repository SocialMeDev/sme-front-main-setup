import { memo } from 'react'
import { Flex, Text, Tooltip, Icon } from '@chakra-ui/react'

import { GridLayout17 } from 'components/atoms/Icons/Interface'
import { useSidebar } from 'contexts/Sidebar/Provider'

function MenuGroupTitle({ name, icon }) {
  const { isOpen } = useSidebar()

  return (
    <Flex align="center" justify="center" h="30px">
      <Tooltip
        gutter={10}
        placement="right"
        label={name}
        display={isOpen ? 'none' : 'block'}
      >
        <Flex align="center" justify="center">
          <Icon
            boxSize={isOpen ? '0' : '5'}
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
          fontSize="sm"
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
