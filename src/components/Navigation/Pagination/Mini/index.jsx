import { memo, useMemo, Fragment } from 'react'

import { Flex } from 'components'
import PageItems from './components/PageItems'

function MiniPagination({
  currentPage = 1,
  limit = 10,
  totalItems,
  onChangePage
}) {
  const maxPages = useMemo(() => {
    return Math.ceil(totalItems / limit)
  }, [totalItems, limit])

  return (
    <Fragment>
      {totalItems > limit && (
        <Flex
          p={4}
          justify="center"
          align="center"
          direction={{ base: 'column', md: 'row' }}
        >
          <Flex gap={2}>
            <PageItems
              maxPages={maxPages}
              currentPage={currentPage}
              onChangePage={onChangePage}
            />
          </Flex>
        </Flex>
      )}
    </Fragment>
  )
}

export default memo(MiniPagination)
