import SidebarContextProvider from 'contexts/Sidebar/Provider'

import { GridLayout10, ToolsSettings } from 'components/atoms/Icons/Interface'

import Sidebar from '.'

export default {
  component: Sidebar,
  title: 'Molecules/Sidebar/Basic/_1',
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

export const Common = (args) => {
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
        },
        {
          label: 'Pagina 2',
          href: '2',
          icon: GridLayout10
        },
        {
          label: 'Pagina 3',
          href: '3',
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
        },
        {
          label: 'Pagina 2',
          href: '2',
          icon: GridLayout10
        },
        {
          label: 'Pagina 3',
          href: '3',
          icon: GridLayout10
        },
        {
          label: 'Pagina 4',
          href: '4',
          icon: GridLayout10
        }
      ]
    }
  ]

  return (
    <SidebarContextProvider>
      <Sidebar
        plugins={[
          {
            name: 'GoBackLogo',
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
        ]}
        {...args}
      />
    </SidebarContextProvider>
  )
}
