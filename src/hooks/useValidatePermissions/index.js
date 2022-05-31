import { useCallback } from 'react'

export default function useValidatePermissions({
  userPermissions,
  globalPermission
}) {
  const hasNecessaryPermissions = useCallback(
    (necessaryPermissions) => {
      if (!necessaryPermissions) return true

      return (userPermissions || []).some((item) => {
        return necessaryPermissions.includes(item) || item === globalPermission
      }, [])
    },
    [userPermissions, globalPermission]
  )

  return {
    hasNecessaryPermissions
  }
}
