import { memo, Fragment } from 'react'
import { Center } from '@chakra-ui/react'

import PageItems from './components/PageItems'

import usePagination from './hooks/usePagination'

function Pagination({ currentPage = 1, limit = 10, totalItems, onChangePage }) {
  const { choosePages } = usePagination({ currentPage, limit, totalItems })

  return (
    <Fragment>
      {totalItems > limit && (
        <Center mt={4}>
          <PageItems
            currentPage={currentPage}
            choosePages={choosePages}
            onChangePage={onChangePage}
          />
        </Center>
      )}
    </Fragment>
  )
}

export default memo(Pagination)
