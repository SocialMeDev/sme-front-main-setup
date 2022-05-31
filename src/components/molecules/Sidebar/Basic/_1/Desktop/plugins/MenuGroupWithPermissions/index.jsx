import { memo } from 'react'
import { Box, Flex } from '@chakra-ui/react'

import { useSidebar } from 'contexts/Sidebar/Provider'
import CheckPermission from 'components/atoms/Permission'
import MenuGroupTitle from 'components/molecules/Sidebar/Basic/_1/Desktop/components/MenuGroupTitle'
import MenuItem from 'components/molecules/Sidebar/Basic/_1/Desktop/components/MenuItem'

function MenuGroupWithPermissions({ sidebarItems = [] }) {
  const { isOpen } = useSidebar()

  return (
    <Flex py={2} direction="column" justify="space-between">
      <Box p={2}>
        {sidebarItems.map(({ name, href, icon, childrens = [] }) => (
          <Box key={name} mb={4} transition="all 0.4s" px={isOpen ? '2' : '0'}>
            {name && <MenuGroupTitle name={name} icon={icon} />}

            {childrens.map((item) => (
              <CheckPermission
                key={item.label}
                permissions={item.permissions}
                loading={false}
              >
                <MenuItem groupHref={href} item={item} />
              </CheckPermission>
            ))}
          </Box>
        ))}
      </Box>
    </Flex>
  )
}

export default memo(MenuGroupWithPermissions)
