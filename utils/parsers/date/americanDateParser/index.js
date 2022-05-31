export default function americanDateParser(stringDateFormat = '') {
  const [day, month, year] = stringDateFormat.split('/')

  const newDate = `${year}-${month}-${day}`

  return newDate
}
