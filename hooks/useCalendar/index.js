import { useMemo, useState, useCallback, useEffect } from 'react'

import { getDaysForTheCalendar, getMonthByIndex } from 'utils/transforms/date'

export default function useCalendar() {
  const [daysInCalendar, setDaysInCalendar] = useState([])
  const [month, setMonth] = useState(new Date().getMonth())
  const [year, setYear] = useState(new Date().getFullYear())

  const formatedMonth = useMemo(() => {
    return getMonthByIndex(month)
  }, [month])

  useEffect(() => {
    const listOfDays = getDaysForTheCalendar(month, year)

    setDaysInCalendar(listOfDays)
  }, [month, year])

  const nextMonth = useCallback(() => {
    if (month !== 11) {
      setMonth(month + 1)
    } else {
      setMonth(0)

      setYear(year + 1)
    }
  }, [month, year])

  const previousMonth = useCallback(() => {
    if (month > 0) {
      setMonth(month - 1)
    } else {
      setMonth(11)
      setYear(year - 1)
    }
  }, [month, year])

  const resetCalendar = useCallback(() => {
    setMonth(new Date().getMonth())
    setYear(new Date().getFullYear())
  }, [])

  return {
    formatedMonth,
    resetCalendar,
    previousMonth,
    nextMonth,
    daysInCalendar,
    month,
    year
  }
}
