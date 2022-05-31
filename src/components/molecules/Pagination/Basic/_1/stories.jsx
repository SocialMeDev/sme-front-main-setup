import { useState } from 'react'

import Pagination from '.'

export default {
  component: Pagination,
  title: 'Molecules/Pagination/Basic/_1',
  args: {
    currentPage: 1,
    limit: 10,
    totalItems: 100
  },
  argTypes: {
    currentPage: {
      name: 'currentPage',
      control: {
        type: 'number'
      },
      table: {
        type: {
          summary: 'number'
        }
      }
    },
    limit: {
      name: 'limit',
      control: {
        type: 'number'
      },
      table: {
        type: {
          summary: 'number'
        }
      }
    },
    totalItems: {
      name: 'totalItems',
      control: {
        type: 'number'
      },
      table: {
        type: {
          summary: 'number'
        }
      }
    },
    onChangePage: {
      table: {
        type: {
          summary: '(nextPage: number) => void'
        }
      }
    }
  }
}

export const Common = (args) => {
  const [page, setPage] = useState(args.currentPage)

  function onChangePage(nextPage) {
    console.log(`page`, page)
    console.log(`nextPage`, nextPage)
    setPage(nextPage)
  }

  return <Pagination {...args} currentPage={page} onChangePage={onChangePage} />
}
