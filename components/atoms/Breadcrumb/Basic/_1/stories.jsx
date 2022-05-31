import Breadcrumb from '.'

export default {
  component: Breadcrumb,
  title: 'Atoms/Breadcrumb/Basic/_1',
  args: {
    items: [
      {
        href: '/',
        label: 'Administrador',
        isCurrentPage: true
      },
      {
        href: '/',
        label: 'Doações'
      },
      {
        href: '/',
        label: 'Julgamento'
      }
    ]
  },
  argTypes: {
    items: {
      table: {
        type: {
          summary:
            '[ { href: string, label: string, isCurrentPage?: boolean } ]'
        }
      }
    }
  }
}

export const Basic = (args) => <Breadcrumb {...args} />
