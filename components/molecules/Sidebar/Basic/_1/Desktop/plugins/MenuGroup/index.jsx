import { memo } from 'react'
import { Box, Flex } from '@chakra-ui/react'

import { useSidebar } from 'contexts/Sidebar/Provider'
import MenuGroupTitle from 'components/molecules/Sidebar/Basic/_1/Desktop/components/MenuGroupTitle'
import MenuItem from 'components/molecules/Sidebar/Basic/_1/Desktop/components/MenuItem'

function MenuGroup({ sidebarItems }) {
  const { isOpen } = useSidebar()

  return (
    <Flex
      direction="column"
      py={2}
      justify="space-between"
      h="calc(100vh - 70px)"
    >
      <Box p={1}>
        {sidebarItems?.map(({ name, href, icon, childrens }) => (
          <Box key={name} mb={4} transition="all 0.4s" px={isOpen ? '2' : '0'}>
            {name && <MenuGroupTitle name={name} icon={icon} />}

            {childrens?.map((item) => (
              <MenuItem key={item.label} groupHref={href} item={item} />
            ))}
          </Box>
        ))}
      </Box>
    </Flex>
  )
}

export default memo(MenuGroup)
