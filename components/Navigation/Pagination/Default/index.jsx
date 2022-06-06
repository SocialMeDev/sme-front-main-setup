import { memo, useMemo, Fragment } from 'react'

import { PaginationDescription, Flex } from 'components'
import usePagination from './hooks/usePagination'
import LimitSelect from './components/LimitSelect'
import PageItems from './components/PageItems'
import PageShortCut from './components/PageShortCut'

function Pagination({
  currentPage = 1,
  limit = 10,
  totalItems,
  onChangePage,
  onChangeLimit,
  showDescription = true,
  descriptionLabel,
  hasShortCut = true
}) {
  const maxPages = useMemo(() => {
    return Math.ceil(totalItems / limit)
  }, [totalItems, limit])

  const { choosePages } = usePagination({
    currentPage: Number(currentPage),
    limit: Number(limit),
    maxPages,
    totalItems
  })

  return (
    <Fragment>
      <Flex
        p={4}
        justify={showDescription ? 'space-between' : 'center'}
        align="center"
        direction={{ base: 'column', md: 'row' }}
      >
        <Fragment>
          {showDescription && (
            <PaginationDescription
              limit={limit}
              page={currentPage}
              totalItems={totalItems}
              label={descriptionLabel}
            />
          )}

          <Flex gap={2}>
            <PageItems
              currentPage={currentPage}
              choosePages={choosePages}
              onChangePage={onChangePage}
            />
            {onChangeLimit && (
              <LimitSelect limit={limit} onChangeLimit={onChangeLimit} />
            )}
            {hasShortCut && (
              <PageShortCut
                totalItems={totalItems}
                limit={limit}
                onChangePage={onChangePage}
              />
            )}
          </Flex>
        </Fragment>
      </Flex>
    </Fragment>
  )
}

export default memo(Pagination)
