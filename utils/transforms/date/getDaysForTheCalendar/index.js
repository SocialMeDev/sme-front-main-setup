import getSundayBeforeTheMonth from './getSundayBeforeTheMonth'

function getDaysForTheCalendar(month, year, maxDaysToGet = 42) {
  const today = new Date().toLocaleString('en-GB').substring(0, 10)

  const listOfDays = []

  let dayCount = 0

  const firstSundayOfTheMonth = getSundayBeforeTheMonth(month, year)

  while (dayCount < maxDaysToGet) {
    const dateString = firstSundayOfTheMonth
      .toLocaleString('en-GB')
      .substring(0, 10)

    listOfDays[dayCount] = {
      date: dateString,
      day: firstSundayOfTheMonth.getDate()
    }

    if (today === dateString) {
      listOfDays[dayCount].isToday = true
    } else if (month === firstSundayOfTheMonth.getMonth()) {
      listOfDays[dayCount].isThisMounth = true
    }

    dayCount = dayCount + 1

    firstSundayOfTheMonth.setDate(firstSundayOfTheMonth.getDate() + 1)
  }

  return listOfDays
}

export default getDaysForTheCalendar
