import { memo, Fragment } from 'react'
import dynamic from 'next/dynamic'

import { Flex, Stack } from 'components'
import AuthenticatedUsersModal from './components/AuthenticatedUsersModal'
import LoggedUserMenu from './components/LoggedUserMenu'
import Logo from './components/Logo'
import MessagesButton from './components/MessagesButton'
import NotificationButton from './components/NotificationButton'
import Search from './components/Search'
import SettingsButton from './components/SettingsButton'
import SidebarCollapseButton from './components/SidebarCollapseButton'
import SocialMeModulesButton from './components/SocialMeModulesButton'
import ToggleThemeButton from './components/ToggleThemeButton'

const LoginButton = dynamic(() => import('./components/LoginButton'), {
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
