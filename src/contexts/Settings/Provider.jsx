import { useEffect, useState, useContext } from 'react'
import { useColorMode } from '@chakra-ui/react'

import { getCookieName } from 'utils/helpers/sirVariables'
import { setStorage, getStorage } from 'utils/helpers/sirStorage'
import SettingsContext from './Context'

export default function SettingsProvider({ defaultSize = 'medium', children }) {
  const { colorMode, toggleColorMode } = useColorMode()
  const [theme, setTheme] = useState('light')
  const [size, setSize] = useState(defaultSize)

  useEffect(() => {
    async function prepareTheme() {
      const userThemeCookie = await getStorage(getCookieName('userTheme'))
      if (!userThemeCookie) {
        setStorage(getCookieName('userTheme'), colorMode)
        setTheme(colorMode)
      } else {
        if (userThemeCookie !== colorMode) {
          toggleColorMode()
        }
        setTheme(userThemeCookie)
      }
    }
    async function prepareSize() {
      const userSizeCookie = await getStorage(getCookieName('userSize'))
      if (!userSizeCookie) {
        setStorage(getCookieName('userSize'), defaultSize)
        setSize(defaultSize)
      } else {
        setSize(userSizeCookie)
      }
    }
    prepareTheme()
    prepareSize()
  }, [])

  useEffect(() => {
    if (theme !== colorMode) {
      toggleColorMode()
    }
    setStorage(getCookieName('userTheme'), theme.toString())
  }, [theme])

  useEffect(() => {
    setStorage(getCookieName('userSize'), size.toString())
  }, [size])

  return (
    <SettingsContext.Provider value={{ theme, setTheme, size, setSize }}>
      {children}
    </SettingsContext.Provider>
  )
}

export const useSettings = () => useContext(SettingsContext)
