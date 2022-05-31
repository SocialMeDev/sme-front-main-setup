import SidebarContextProvider from 'contexts/Sidebar/Provider'

import Card from 'components/atoms/Card/Basic/_1'

import Navbar from '.'

export default {
  component: Navbar,
  title: 'Molecules/Navbar/Basic/_1',
  argTypes: {
    right: {
      name: 'right',
      table: {
        type: {
          summary: '[ { name: string, visible: boolean, props: Object } ]'
        }
      }
    },
    center: {
      name: 'center',
      table: {
        type: {
          summary: '[ { name: string, visible: boolean, props: Object } ]'
        }
      }
    },
    left: {
      name: 'left',
      table: {
        type: {
          summary: '[ { name: string, visible: boolean, props: Object } ]'
        }
      }
    }
  }
}

export const Common = (args) => {
  return (
    <SidebarContextProvider>
      <Card>
        <Navbar
          {...args}
          left={[
            {
              name: 'SidebarCollapseButton'
            },
            {
              name: 'NotificationButton'
            }
          ]}
          right={[
            {
              name: 'SocialMeModulesButton'
            },

            {
              name: 'MessagesButton'
            },
            {
              name: 'ToggleThemeButton'
            }
          ]}
        />
      </Card>
    </SidebarContextProvider>
  )
}
