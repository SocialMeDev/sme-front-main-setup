import { memo, Fragment } from 'react'

import { Flex } from 'components'
import MenuGroupTitle from './components/Title'
import MenuItem from './components/Item'

function MenuGroup({ sidebarItems }) {
  return (
    <Flex direction="column">
      {sidebarItems?.map(({ name, href, icon, childrens }) => (
        <Fragment key={name}>
          {childrens.length > 0 && (
            <Flex direction="column" px={2}>
              <MenuGroupTitle name={name} icon={icon} />

              {childrens?.map((item) => (
                <MenuItem key={item.href} groupHref={href} item={item} />
              ))}
            </Flex>
          )}
        </Fragment>
      ))}
    </Flex>
  )
}

export default memo(MenuGroup)
