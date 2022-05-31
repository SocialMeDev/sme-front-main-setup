import SidebarContextProvider from 'contexts/Sidebar/Provider'
import SettingsContextProvider from 'contexts/Settings/Provider'
import { Card } from 'components'

import Navbar from '.'

export default {
  component: Navbar,
  title: 'Recipe/Navbar/Default',
  args: {
    left: [{ name: 'SidebarCollapseButton' }, { name: 'NotificationButton' }],
    right: [
      { name: 'SocialMeModulesButton' },
      { name: 'MessagesButton' },
      { name: 'SettingsButton' }
    ]
  },
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
    <SettingsContextProvider>
      <SidebarContextProvider>
        <Card>
          <Navbar {...args} />
        </Card>
      </SidebarContextProvider>
    </SettingsContextProvider>
  )
}
