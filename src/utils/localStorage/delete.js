export default async function deleteLocalStorage(key) {
  localStorage.removeItem(key)

  return true
}
