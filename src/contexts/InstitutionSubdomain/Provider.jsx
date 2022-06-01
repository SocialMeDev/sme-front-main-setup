import { useEffect, useContext, useState } from 'react'
import { useRouter } from 'next/router'

import { Loader } from 'components'
import { getAppUrl } from 'utils/helpers/sirVariables'
import InstitutionSubdomainContext from './Context'
import showInstitution from 'services/socialMeApis/modules/appAlerts/calls/servicePublic/institution/show'

export default function InstitutionSubdomain({ children }) {
  const { push } = useRouter()

  const [isLoading, setIsLoading] = useState(true)
  const [institution, setInstitution] = useState({})

  useEffect(() => {
    async function loadAsyncFunction() {
      setIsLoading(true)

      const alertsUrl = getAppUrl('appAlerts')

      const domain = window.location.hostname

      let subdomain = 'demo'

      if (domain !== 'localhost' && domain !== '10.10.2.248') {
        subdomain = domain.replace('https://', '').split('.')[0]
      }

      const response = await showInstitution(subdomain)

      if (response.header.success) {
        setInstitution(response.body.license)

        setIsLoading(false)
      } else {
        await push(alertsUrl)
      }
    }

    loadAsyncFunction()
  }, [])

  return (
    <InstitutionSubdomainContext.Provider value={{ institution }}>
      {isLoading ? <Loader height="100vh" text="Carregando" /> : children}
    </InstitutionSubdomainContext.Provider>
  )
}

export const useInstitutionSubdomain = () =>
  useContext(InstitutionSubdomainContext)
