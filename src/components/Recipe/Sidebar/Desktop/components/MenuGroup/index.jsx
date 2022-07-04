import { memo, Fragment } from 'react'

import { Flex } from 'components'
import MenuGroupTitle from './components/Title'
import MenuItem from './components/Item'

function MenuGroup({ isOpen, sidebarItems }) {
  console.log(`MenuGroup isOpen`, isOpen)

  return (
    <Flex direction="column">
      {sidebarItems.map(({ name, href, icon, childrens }) => (
        <Fragment key={name}>
          {childrens.length > 0 && (
            <Flex direction="column" transition="all 0.4s" px={isOpen ? 2 : 0}>
              <MenuGroupTitle isOpen={isOpen} name={name} icon={icon} />

              {childrens.map((item) => (
                <MenuItem
                  isOpen={isOpen}
                  key={item.href}
                  groupHref={href}
                  item={item}
                />
              ))}
            </Flex>
          )}
        </Fragment>
      ))}
    </Flex>
  )
}

export default memo(MenuGroup)
