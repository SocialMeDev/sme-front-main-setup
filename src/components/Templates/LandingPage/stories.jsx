import { useMemo } from 'react'

import LandingPage from '.'
import SidebarContextProvider from 'contexts/Sidebar/Provider'

export default {
  component: LandingPage,
  title: 'Templates/LandingPage/Default',
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

export const Default = (args) => {
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
