export default function getSundayBeforeTheMonth(month, year) {
  const firstDayOfTheMonth = new Date(year, month, 1)

  let sunday = ''

  while (sunday === '') {
    if (firstDayOfTheMonth.getDay() === 0) {
      sunday = firstDayOfTheMonth
    } else {
      firstDayOfTheMonth.setDate(firstDayOfTheMonth.getDate() - 1)
    }
  }

  return sunday
}
