import { useEffect, useContext, useState, useMemo } from 'react'
import { useRouter } from 'next/router'

import { Loader } from 'components'
import { getParameterName, getCookieName } from 'utils/helpers/sirVariables'
import { setStorage } from 'utils/helpers/sirStorage'
import SocialMeContext from './Context'

export default function SocialMeProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true)
  const { query, replace, reload } = useRouter()

  const { usersTokens, userPosition } = useMemo(() => {
    return {
      usersTokens: query[getParameterName('usersTokens')],
      userPosition: query[getParameterName('userPosition')]
    }
  }, [query])

  useEffect(() => {
    async function setAuthInformations() {
      const userCookie = await getCookieName('user')
      await setStorage(userCookie, usersTokens)
      const userPositionCookie = await getCookieName('userPosition')
      setStorage(userPositionCookie, userPosition)
      let url = ''
      if (typeof window !== 'undefined') {
        url = window.location.href.split('?')[0]
      }

      await replace(url)
      return reload()
    }

    if (usersTokens && userPosition) {
      setAuthInformations()
    } else {
      setIsLoading(false)
    }
  }, [usersTokens, userPosition])

  return (
    <SocialMeContext.Provider value={{}}>
      {isLoading ? <Loader height="100vh" text="Carregando" /> : children}
    </SocialMeContext.Provider>
  )
}

export const useSocialMe = () => useContext(SocialMeContext)
