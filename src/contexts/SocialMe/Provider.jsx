import { useEffect, useContext, useState, useMemo } from 'react'
import { useRouter } from 'next/router'

import { Loader } from 'components'
import URL_PARAMETERS from 'constants/urlParameters'
import { setStorage } from 'helpers/sirStorage'
import SocialMeContext from './Context'

export default function SocialMeProvider({ children }) {
  const usersTokensCookie = process.env.NEXT_PUBLIC_USERS_TOKENS_COOKIE
  const userPositionCookie = process.env.NEXT_PUBLIC_USER_POSITION_COOKIE

  const [isLoading, setIsLoading] = useState(true)
  const { query, replace, reload } = useRouter()

  const { usersTokens, userPosition } = useMemo(() => {
    return {
      usersTokens: query[URL_PARAMETERS.USERS_TOKENS],
      userPosition: query[URL_PARAMETERS.USER_POSITION]
    }
  }, [query])

  useEffect(() => {
    async function setAuthInformations() {
      await setStorage(usersTokensCookie, usersTokens)
      await setStorage(userPositionCookie, userPosition)

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
