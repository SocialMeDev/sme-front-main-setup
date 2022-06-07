import { useState } from 'react'

import MiniPagination from '.'

export default {
  component: MiniPagination,
  title: 'Navigation/Pagination/Mini',
  args: {
    currentPage: 1,
    limit: 10,
    totalItems: 100,
    onChangePage: (page) => {
      console.log(`Mudando a página para: `, page)
    }
  },
  argTypes: {
    onChangePage: {
      name: 'onChangePage',
      table: {
        type: {
          summary: '(page: number) => void'
        }
      }
    },
    currentPage: {
      name: 'currentPage',
      table: {
        type: {
          summary: 'number'
        }
      }
    },
    limit: {
      name: 'limit',
      table: {
        type: {
          summary: 'number'
        }
      }
    },
    totalItems: {
      name: 'totalItems',
      table: {
        type: {
          summary: 'number'
        }
      }
    }
  }
}

export const Common = (args) => {
  const [page, setPage] = useState(args.currentPage)
  const [limit, setLimit] = useState(args.limit)

  function onChangePage(nextPage) {
    setPage(nextPage)
  }

  function onChangeLimit(newLimit) {
    setLimit(newLimit)
  }

  return (
    <MiniPagination
      {...args}
      currentPage={page}
      limit={limit}
      onChangePage={onChangePage}
      onChangeLimit={onChangeLimit}
    />
  )
}
