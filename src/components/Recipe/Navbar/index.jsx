import { memo, Fragment } from 'react'
import dynamic from 'next/dynamic'

import { Flex, Stack } from 'components'
import AuthenticatedUsersModal from './plugins/AuthenticatedUsersModal'
import LoggedUserMenu from './plugins/LoggedUserMenu'
import Logo from './plugins/Logo'
import MessagesButton from './plugins/MessagesButton'
import NotificationButton from './plugins/NotificationButton'
import Search from './plugins/Search'
import SettingsButton from './plugins/SettingsButton'
import SidebarCollapseButton from './plugins/SidebarCollapseButton'
import SocialMeModulesButton from './plugins/SocialMeModulesButton'
import ToggleThemeButton from './plugins/ToggleThemeButton'

const LoginButton = dynamic(() => import('./plugins/LoginButton'), {
  ssr: false
})

const plugins = {
  AuthenticatedUsersModal,
  LoggedUserMenu,
  LoginButton,
  Logo,
  MessagesButton,
  NotificationButton,
  Search,
  SettingsButton,
  SidebarCollapseButton,
  SocialMeModulesButton,
  ToggleThemeButton
}

function Navbar({ left, center, right, bg = 'bgContent', ...rest }) {
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
      maxH="50px"
      px={1}
      borderBottomWidth={1}
      bg={bg}
      borderColor="borderColor"
      justify="space-between"
      {...rest}
    >
      <Stack
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
