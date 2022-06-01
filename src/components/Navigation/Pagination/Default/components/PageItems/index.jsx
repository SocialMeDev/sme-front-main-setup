import { Fragment, memo } from 'react'
import { Button } from 'components'

const PageItems = ({ currentPage, choosePages, onChangePage }) => {
  const { format } = new Intl.NumberFormat('pt-BR')

  return (
    <Fragment>
      {choosePages.map(({ label, value }) => {
        const isCurrentPage = value === currentPage

        return (
          <Button
            onClick={() => onChangePage(value)}
            key={value}
            color={isCurrentPage ? 'light' : 'primary'}
            bg={isCurrentPage ? 'primary' : 'light'}
            borderColor="primary"
            _hover={{ color: 'light', bg: 'primary' }}
          >
            {isNaN(label) ? label : format(label)}
          </Button>
        )
      })}
    </Fragment>
  )
}

export default memo(PageItems)
