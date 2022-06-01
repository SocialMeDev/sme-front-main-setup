import { useContext, useCallback, useState, useEffect } from 'react'

import { useRouter } from 'next/router'

import InstitutionContext from './Context'

import showInstitution from 'services/socialMeApis/modules/appAlerts/calls/institution/show'
import readLoggedUserPermission from 'services/socialMeApis/modules/appAlerts/calls/user/permission/show'

function InstitutionProvider({ children }) {
  const [institution, setInstitution] = useState({})
  const [userPermissions, setUserPermissions] = useState([])
  const [finishedInstitutionLogic, setFinishedInstitutionLogic] =
    useState(false)

  const { query } = useRouter()

  const { institutionSlug, userPosition } = query

  const formatUserPermissions = useCallback((permissions) => {
    return permissions.map(({ permission }) => {
      return permission
    })
  }, [])

  const getUserPermissionsInThisInstitutions = useCallback(
    async (institution) => {
      const response = await readLoggedUserPermission(institution)

      let permissions = []

      if (response.header.success) {
        permissions = formatUserPermissions(response.body.permission.elements)
      }

      setUserPermissions(permissions)

      const userHasPermissions = permissions.length > 0

      return userHasPermissions
    },
    []
  )

  const loadInstitution = useCallback(async (institutionSlug, isMounted) => {
    const response = await showInstitution(institutionSlug)

    if (response?.header?.success) {
      if (isMounted) setInstitution(response.body.license)
    }
  }, [])

  useEffect(() => {
    let isMounted = true

    if (isMounted) setFinishedInstitutionLogic(false)

    async function loadAsyncFunction() {
      await loadInstitution(institutionSlug, isMounted)

      if (userPosition) {
        await getUserPermissionsInThisInstitutions(institutionSlug)
      }

      if (isMounted) setFinishedInstitutionLogic(true)
    }

    if (institutionSlug) {
      loadAsyncFunction()
    } else {
      if (isMounted) setUserPermissions(null)
      if (isMounted) setFinishedInstitutionLogic(true)
    }

    return () => {
      isMounted = false
    }
  }, [institutionSlug])

  return (
    <InstitutionContext.Provider
      value={{
        institution,
        userPermissions,
        getUserPermissionsInThisInstitutions,
        loadInstitution,
        finishedInstitutionLogic
      }}
    >
      {children}
    </InstitutionContext.Provider>
  )
}

export default InstitutionProvider

export const useInstitution = () => useContext(InstitutionContext)
