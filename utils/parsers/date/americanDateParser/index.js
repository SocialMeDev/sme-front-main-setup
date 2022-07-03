import { format } from 'date-fns'

export default function americanDateParser(stringDateFormat = '') {
  if (typeof stringDateFormat === 'number') {
    return format(stringDateFormat, 'yyyy-MM-dd')
  }

  if (stringDateFormat.includes('/')) {
    const [day, month, year] = stringDateFormat.split('/')
    const newDate = `${year}-${month}-${day}`
    return newDate
  }

  return stringDateFormat
}
