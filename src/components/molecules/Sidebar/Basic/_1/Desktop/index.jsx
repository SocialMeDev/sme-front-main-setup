import { Fragment, memo, useCallback } from 'react'
import { Box } from '@chakra-ui/react'

import { useSidebar } from 'contexts/Sidebar/Provider'

import GoBackLogo from './plugins/GoBackLogo'
import Logo from './plugins/Logo'
import MenuGroup from './plugins/MenuGroup'
import MenuGroupWithPermissions from './plugins/MenuGroupWithPermissions'

const plugins = {
  GoBackLogo,
  Logo,
  MenuGroup,
  MenuGroupWithPermissions
}

function SideBarDesktop({ ...rest }) {
  const { isOpen } = useSidebar()

  const RenderPlugin = useCallback(({ name, visible = true, props }) => {
    if (visible) {
      const Plugin = plugins[name]

      return <Plugin {...props} />
    }

    return <Fragment />
  }, [])

  return (
    <Box
      maxH="100vh"
      pb="10"
      borderRightWidth="1px"
      bg="containerBg"
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
