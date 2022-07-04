import { Fragment, memo, useCallback } from 'react'

import { Box } from 'components'
import { useSidebar } from 'contexts/Sidebar/Provider'

import LogoWithLink from './components/LogoWithLink'
import Logo from './components/Logo'
import MenuGroup from './components/MenuGroup'

const plugins = {
  LogoWithLink,
  Logo,
  MenuGroup
}

function SideBarDesktop({ ...rest }) {
  const { isOpen } = useSidebar()

  const RenderPlugin = useCallback(
    ({ name, visible = true, props }) => {
      if (visible) {
        const Plugin = plugins[name]

        return <Plugin isOpen={isOpen} {...props} />
      }

      return <Fragment />
    },
    [isOpen]
  )

  return (
    <Box
      borderRightWidth="1px"
      bg="bgContent"
      w={isOpen ? '300px' : '45px'}
      transition="all 0.4s"
    >
      {rest.plugins?.map((plugin, index) => (
        <RenderPlugin {...plugin} key={index} />
      ))}
    </Box>
  )
}

export default memo(SideBarDesktop)
