import { memo, Fragment } from 'react'

import { Box, Flex } from 'components'
import MenuGroupTitle from '../../components/MenuGroupTitle'
import MenuItem from '../../components/MenuItem'

function MenuGroup({ sidebarItems }) {
  return (
    <Flex direction="column" justify="space-between" h="calc(100vh - 70px)">
      <Box>
        {sidebarItems?.map(({ name, href, icon, childrens }) => (
          <Fragment key={name}>
            {childrens.length > 0 && (
              <Box transition="all 0.4s" px={2}>
                <MenuGroupTitle name={name} icon={icon} />

                {childrens?.map((item) => (
                  <MenuItem key={item.label} groupHref={href} item={item} />
                ))}
              </Box>
            )}
          </Fragment>
        ))}
      </Box>
    </Flex>
  )
}

export default memo(MenuGroup)
