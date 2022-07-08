import {
  setLocalStorage,
  deleteLocalStorage,
  getLocalStorage
} from 'utils/localStorage'

async function getStorage(key) {
  const localStorageValue = await getLocalStorage(key)

  if (localStorageValue) return localStorageValue
}

async function setStorage(key, value) {
  await setLocalStorage({ key: key, value: value })
}

async function deleteStorage(key) {
  await deleteLocalStorage(key)
}

export { setStorage, getStorage, deleteStorage }
