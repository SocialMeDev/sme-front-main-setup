import { memo } from 'react'
import {
  Box,
  Flex,
  Text,
  Tooltip,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'

import { GridLayout17 } from 'components/atoms/Icons/Interface'

import MenuItem from './components/MenuItem'

function MenuGroup({ sidebarItems }) {
  const colorGroupName = useColorModeValue('gray.300', 'gray.600')

  return (
    <Flex
      direction="column"
      fontSize="sm"
      aria-label="Main Navigation"
      py={2}
      justify="space-between"
      h="calc(100vh - 70px)"
    >
      <Box p={1}>
        {sidebarItems?.map((group) => (
          <Box key={group.name} mb="5" transition="all 0.5s">
            {group.name && (
              <Flex align="center" justify="center" h="30px">
                <Tooltip
                  gutter={10}
                  placement="right"
                  label={group.name}
                  fontSize="md"
                >
                  <Flex align="center" justify="center">
                    <Icon
                      as={group.icon || GridLayout17}
                      color={colorGroupName}
                      transition="all 0.4s"
                    />
                  </Flex>
                </Tooltip>
                <Text
                  textTransform="uppercase"
                  color={colorGroupName}
                  transition="all 0.4s"
                >
                  {group.name}
                </Text>
              </Flex>
            )}

            {group.childrens?.map((item) => (
              <MenuItem key={item.label} groupHref={group.href} item={item} />
            ))}
          </Box>
        ))}
      </Box>
    </Flex>
  )
}

export default memo(MenuGroup)
