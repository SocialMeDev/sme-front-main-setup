import { useMemo } from 'react'

import SidebarContextProvider from 'contexts/Sidebar/Provider'
import { GridLayout10, ToolsSettings } from 'components/Icons/Interface'
import Sidebar from '.'

export default {
  component: Sidebar,
  title: 'Recipe/Sidebar/Default',
  argTypes: {
    plugins: {
      name: 'plugins',
      table: {
        type: {
          summary: '[ { name: string, visible: boolean, props: Object } ]'
        }
      }
    }
  }
}

export const Default = (args) => {
  const sidebarItems = [
    {
      name: 'Grupo 1',
      icon: ToolsSettings,
      href: '/',
      childrens: [
        {
          label: 'Pagina 1',
          href: '',
          icon: GridLayout10
        }
      ]
    },
    {
      name: 'Grupo 2',
      icon: ToolsSettings,
      href: '/',
      childrens: [
        {
          label: 'Pagina 1',
          href: '1',
          icon: GridLayout10
        }
      ]
    }
  ]

  const plugins = useMemo(() => {
    return [
      {
        name: 'LogoWithLink',
        props: {
          label: 'Voltar a alguma tela ai',
          href: '/'
        }
      },
      {
        name: 'MenuGroup',
        props: {
          sidebarItems
        }
      }
    ]
  }, [])

  return (
    <SidebarContextProvider>
      <Sidebar plugins={plugins} {...args} />
    </SidebarContextProvider>
  )
}
