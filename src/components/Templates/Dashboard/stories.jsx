import { useMemo } from 'react'

import Dashboard from '.'
import SidebarContextProvider from 'contexts/Sidebar/Provider'
import { ToolsSettings } from 'components/Icons/Interface'
import { HomeHouse } from 'components/Icons/BuildingConstruction'

export default {
  component: Dashboard,
  title: 'Templates/Dashboards/Default',
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

export const Defaul = (args) => {
  const sidebar = useMemo(() => {
    return {
      plugins: [
        {
          name: 'GoBackLogo',
          props: {
            label: 'Voltar a lista de modulos',
            href: '/'
          }
        },
        {
          name: 'MenuGroup',
          props: {
            sidebarItems: [
              {
                name: 'Desenvolvimento',
                icon: ToolsSettings,
                href: '/',
                childrens: [
                  {
                    label: 'Pagina 1',
                    href: '1',
                    icon: HomeHouse
                  },
                  {
                    label: 'Pagina 2',
                    href: '2',
                    icon: HomeHouse
                  },
                  {
                    label: 'Pagina 3',
                    href: '3',
                    icon: HomeHouse
                  }
                ]
              }
            ]
          }
        }
      ]
    }
  }, [])

  const navbar = useMemo(() => {
    return {
      left: [
        {
          name: 'SidebarCollapseButton'
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
      <Dashboard {...args} sidebar={sidebar} navbar={navbar}>
        Conteúdo da página
      </Dashboard>
    </SidebarContextProvider>
  )
}
