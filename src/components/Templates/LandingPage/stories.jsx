import { useMemo } from 'react'

import LandingPage from '.'

import SidebarContextProvider from 'contexts/Sidebar/Provider'

export default {
  component: LandingPage,
  title: 'Organisms/LandingPage/Basic/_1',
  argTypes: {
    children: {
      name: 'children',
      table: {
        type: {
          summary: 'ReactElement'
        }
      }
    }
  }
}

export const Common = (args) => {
  const navbar = useMemo(() => {
    return {
      left: [
        {
          name: 'NotificationButton'
        }
      ],
      right: [
        {
          name: 'SocialMeModulesButton'
        },
        {
          name: 'ToggleThemeButton'
        }
      ]
    }
  }, [])

  return (
    <SidebarContextProvider>
      <LandingPage {...args} navbar={navbar}>
        Conteúdo da página
      </LandingPage>
    </SidebarContextProvider>
  )
}
