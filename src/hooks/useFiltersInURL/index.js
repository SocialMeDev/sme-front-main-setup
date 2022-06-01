import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function useFiltersInURL(initialFilters = {}) {
  const { push, pathname, query } = useRouter()

  const [filters, setFilters] = useState(initialFilters)

  useEffect(() => {
    push({
      pathname,
      query: Object.assign(query, filters)
    })
  }, [filters])

  return [filters, setFilters]
}
