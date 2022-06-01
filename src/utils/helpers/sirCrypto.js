import CryptoJS from 'crypto-js'
const secret = 'my-secret-key@12345'

function encrypt(value) {
  const encryptValue = CryptoJS.AES.encrypt(
    JSON.stringify(value),
    secret
  ).toString()
  return encryptValue
}

function decrypt(value) {
  const decryptValue = CryptoJS.AES.decrypt(value, secret)
  const decryptedParse = JSON.parse(decryptValue.toString(CryptoJS.enc.Utf8))
  return decryptedParse
}

export { encrypt, decrypt }
