export default function capitalizeString(string = '', defaultReturned = '-') {
  if (!string) return defaultReturned

  const arrayOfString = string.toLowerCase().split(' ')

  const newFormatedArrayOfString = []

  arrayOfString.forEach((string) => {
    let word = ''

    if (string.length <= 2) {
      if (string.length === 1) {
        word = string.charAt(0) + string.slice(1)
      }
      if (string.length === 2) {
        if (string.split('')[0] === 'd') {
          word = string.charAt(0) + string.slice(1)
        } else {
          word = string.charAt(0).toUpperCase() + string.slice(1)
        }
      }
      word = string.charAt(0).toUpperCase() + string.slice(1)
    } else {
      word = string.charAt(0).toUpperCase() + string.slice(1)
    }

    newFormatedArrayOfString.push(word)
  })

  return newFormatedArrayOfString.join(' ')
}
