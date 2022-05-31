export default async function getLocalStorage(key) {
  if (!key) return false

  const value = localStorage.getItem(key)

  return value
}
