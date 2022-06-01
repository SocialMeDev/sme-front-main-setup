import { useState, useEffect } from 'react'

import setBegginerPageItems from './setBegginerPageItems'
import setMiddlePageItems from './setMiddlePageItems'
import setLastPageItems from './setLastPageItems'

const usePagination = ({ totalItems, limit, currentPage }) => {
  const [choosePages, setPages] = useState([])

  const isMobile = window.innerWidth < 600

  useEffect(() => {
    function ChooseBegginerPageItems(maxPages = 0) {
      const pagesQuantity = maxPages < 7 ? maxPages : 7

      let pages = setBegginerPageItems(pagesQuantity, maxPages)

      if (isMobile) pages.splice(5, 2)

      return pages
    }

    function ChooseMiddlePageItems(maxPages) {
      let pages = []

      pages = setMiddlePageItems(pages, currentPage, maxPages)

      if (isMobile) {
        pages.splice(0, 1)
        pages.splice(5, 1)
      }

      return pages
    }

    function ChooseLastPageItems(maxPages) {
      let pages = []

      pages = setLastPageItems(pages, maxPages)

      if (isMobile) pages.splice(2, 2)

      return pages
    }

    function TreatedPageItemsInArray() {
      const maxPages = Math.ceil(totalItems / limit)

      const middlePageNeighbor = 3

      let currentPages = []

      if (maxPages <= 4 || currentPage < 4) {
        currentPages = ChooseBegginerPageItems(maxPages)
      } else if (currentPage < maxPages - middlePageNeighbor) {
        currentPages = ChooseMiddlePageItems(maxPages)
      } else {
        currentPages = ChooseLastPageItems(maxPages)
      }

      setPages(currentPages)
    }

    TreatedPageItemsInArray()
  }, [isMobile, currentPage, limit, totalItems])

  return { choosePages }
}

export default usePagination
