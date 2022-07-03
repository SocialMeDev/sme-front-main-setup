import { format } from 'date-fns'
import { americanDateParser } from 'utils/parsers/date'

export default function americanTimestampParser(stringTimestampFormat = '') {
  console.log('entrada ', stringTimestampFormat)
  const date = stringTimestampFormat.split(' ')[0]
  const hour = stringTimestampFormat.split(' ')[1]

  const newDate = `${americanDateParser(date)} ${hour || ''}`
  const dt = new Date(newDate)
  const dtDateOnly = new Date(dt.valueOf() + dt.getTimezoneOffset() * 60 * 1000)
  // Prints always "2017-12-12", regardless the time zone it executed in
  /*
  const date = stringTimestampFormat.split(' ')[0]
  const hour = stringTimestampFormat.split(' ')[1]

  const newDate = `${americanDateParser(date)} ${hour}`

  return newDate
  */
  console.log('saida ', format(dtDateOnly, 'yyyy-MM-dd HH:mm'))
  return format(dtDateOnly, 'yyyy-MM-dd HH:mm')
}
