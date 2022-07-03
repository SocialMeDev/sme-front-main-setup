import { Fragment, memo, useMemo } from 'react'

import { Text } from 'components'

function PaginationDescription({
  page = 1,
  limit = 10,
  totalItems,
  label = 'registros'
}) {
  const { format } = new Intl.NumberFormat('pt-BR')

  const { showingTo, showingFrom } = useMemo(() => {
    return {
      showingTo: format(page === 1 ? 1 : limit * page - limit + 1),
      showingFrom: format(limit * page > totalItems ? totalItems : limit * page)
    }
  }, [page, limit, totalItems])

  return (
    <Fragment>
      {totalItems > 0 && (
        <Text>
          Mostrando de {showingTo} a {showingFrom} de {format(totalItems)}{' '}
          {label}
        </Text>
      )}
    </Fragment>
  )
}

export default memo(PaginationDescription)
