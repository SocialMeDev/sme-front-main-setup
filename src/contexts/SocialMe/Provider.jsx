import { useEffect, useContext, useState, useMemo } from 'react'
import { useRouter } from 'next/router'

import { getParameterName, getCookieName } from 'utils/helpers/sirVariables'
import { setStorage } from 'utils/helpers/sirStorage'
import { Loader } from 'components'
import SocialMeContext from './Context'

export default function SocialMeProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true)
  const { query } = useRouter()
  const router = useRouter()

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

      await router.replace(url)
      return router.reload()
    }

    if (usersTokens && userPosition) {
      setAuthInformations()
    }
    setIsLoading(false)
  }, [usersTokens, userPosition])

  return (
    <SocialMeContext.Provider value={{}}>
      {isLoading ? <Loader height="100vh" text="Carregando" /> : children}
    </SocialMeContext.Provider>
  )
}

export const useSocialMe = () => useContext(SocialMeContext)
