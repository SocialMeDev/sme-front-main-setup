import { memo, Fragment } from 'react'

import { Flex } from 'components'
import { useSidebar } from 'contexts/Sidebar/Provider'
import MenuGroupTitle from '../../components/MenuGroupTitle'
import MenuItem from '../../components/MenuItem'

function MenuGroup({ sidebarItems }) {
  const { isOpen } = useSidebar()

  return (
    <Flex direction="column">
      {sidebarItems?.map(({ name, href, icon, childrens }) => (
        <Fragment key={name}>
          {childrens.length > 0 && (
            <Flex direction="column" transition="all 0.4s" px={isOpen ? 2 : 0}>
              <MenuGroupTitle name={name} icon={icon} />

              {childrens?.map((item) => (
                <MenuItem key={item.label} groupHref={href} item={item} />
              ))}
            </Flex>
          )}
        </Fragment>
      ))}
    </Flex>
  )
}

export default memo(MenuGroup)
