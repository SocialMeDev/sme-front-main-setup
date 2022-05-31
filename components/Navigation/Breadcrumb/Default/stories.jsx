import { BreadcrumbLink, BreadcrumbItem } from 'components'

import Breadcrumb from '.'

export default {
  component: Breadcrumb,
  title: 'Navigation/Breadcrumb/Default',
  args: {
    spacing: 2,
    separator: '/',
    fontSize: 'sm'
  },
  argTypes: {
    fontSize: {
      options: ['xs', 'sm', 'md'],
      control: { type: 'radio' },
      name: 'fontSize',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    separator: {
      name: 'separator',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    spacing: {
      name: 'spacing',
      table: {
        type: {
          summary: 'number'
        }
      }
    },
    items: {
      name: 'items',
      table: {
        type: {
          summary: '[{ label: string, href: string, isCurrentPage?: boolean }]'
        }
      }
    }
  }
}

export const Default = (args) => {
  return (
    <Breadcrumb {...args}>
      <BreadcrumbItem>
        <BreadcrumbLink>Home</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink>About</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink>Current</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}

export const WithItems = (args) => {
  return (
    <Breadcrumb
      {...args}
      items={[
        { label: 'Página 1', href: '#', isCurrentPage: true },
        { label: 'Página 2', href: '#' },
        { label: 'Página 3', href: '#' }
      ]}
    />
  )
}
