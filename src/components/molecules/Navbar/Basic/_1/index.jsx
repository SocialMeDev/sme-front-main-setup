import { memo, Fragment } from 'react'

import { Flex, Stack } from 'components'
import AuthenticatedUsersModal from './plugins/AuthenticatedUsersModal'
import LoginButton from './plugins/LoginButton'
import Logo from './plugins/Logo'
import MessagesButton from './plugins/MessagesButton'
import NotificationButton from './plugins/NotificationButton'
import Search from './plugins/Search'
import SidebarCollapseButton from './plugins/SidebarCollapseButton'
import SocialMeModulesButton from './plugins/SocialMeModulesButton'
import ToggleThemeButton from './plugins/ToggleThemeButton'
import UserContainer from './plugins/UserContainer'

const plugins = {
  AuthenticatedUsersModal,
  LoginButton,
  Logo,
  MessagesButton,
  NotificationButton,
  Search,
  SidebarCollapseButton,
  SocialMeModulesButton,
  ToggleThemeButton,
  UserContainer
}

function Navbar({ left, center, right, ...rest }) {
  function RenderPlugin({ name, visible = true, props, component }) {
    if (visible) {
      if (component) {
        const Component = component

        return <Component {...props} />
      }

      const Plugin = plugins[name]

      return <Plugin {...props} />
    }
    return <Fragment />
  }

  return (
    <Flex
      as="nav"
      minH="50px"
      px={2}
      borderBottomWidth={1}
      bg="containerBg"
      {...rest}
    >
      <Stack
        w="100%"
        minH="50px"
        align="center"
        justify="flex-start"
        flexWrap="wrap"
        direction="row"
      >
        {left?.map((plugin, index) => (
          <RenderPlugin {...plugin} key={index} />
        ))}
      </Stack>

      {center && (
        <Stack
          w="100%"
          minH="50px"
          align="center"
          justify="center"
          flexWrap="wrap"
          direction="row"
        >
          {center?.map((plugin, index) => (
            <RenderPlugin {...plugin} key={index} />
          ))}
        </Stack>
      )}

      <Stack
        w="100%"
        minW={['80%', '50%']}
        minH="50px"
        align="center"
        justify="flex-end"
        flexWrap="wrap"
        direction="row"
      >
        {right?.map((plugin, index) => (
          <RenderPlugin {...plugin} key={index} />
        ))}
      </Stack>
    </Flex>
  )
}

export default memo(Navbar)
