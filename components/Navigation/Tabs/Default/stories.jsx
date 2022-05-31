import { Tab, TabList, TabPanel, TabPanels } from 'components'

import Tabs from '.'

export default {
  component: Tabs,
  title: 'Navigation/Tabs/Default',
  args: {
    align: 'start',
    colorScheme: 'primary',
    direction: 'ltr',
    isFitted: false,
    isLazy: true,
    orientation: 'horizontal',
    size: 'sm',
    variant: 'line'
  },
  argTypes: {
    align: {
      options: ['center', 'end', 'start'],
      name: 'align',
      control: { type: 'radio' },
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    direction: {
      options: ['ltr', 'rtl'],
      name: 'direction',
      control: { type: 'radio' },
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    orientation: {
      options: ['horizontal', 'vertical'],
      name: 'orientation',
      control: { type: 'radio' },
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    variant: {
      options: [
        'line',
        'enclosed',
        'enclosed-colored',
        'soft-rounded',
        'solid-rounded'
      ],
      name: 'variant',
      control: { type: 'radio' },
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    colorScheme: {
      name: 'colorScheme',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    isFitted: {
      name: 'isFitted',
      table: {
        type: {
          summary: 'boolean'
        }
      }
    },
    isLazy: {
      name: 'isLazy',
      table: {
        type: {
          summary: 'boolean'
        }
      }
    }
  }
}

export const Default = (args) => {
  return (
    <Tabs {...args}>
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Three</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
