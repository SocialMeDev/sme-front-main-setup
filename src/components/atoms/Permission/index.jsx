import { useState, useEffect, memo } from 'react'
import { Box } from '@chakra-ui/react'

import { useInstitution } from 'contexts/Institution/Provider'
import Validate from 'components/atoms/Validate'

function VerifyPermission({
  loading,
  setLoading,
  setAuthorizedValue,
  children,
  permissions,
  redirect
}) {
  const [isAuthorized, setIsAuthorized] = useState(false)

  const { userPermissions } = useInstitution()

  useEffect(() => {
    async function checkPermission() {
      if (setLoading) setLoading(true)

      let isPermited = false

      if (permissions) {
        isPermited = userPermissions.some(
          (item) => permissions.includes(item),
          []
        )
      } else {
        isPermited = true
      }

      if (userPermissions.length === 0) {
        isPermited = false
      }

      if (isPermited) {
        setIsAuthorized(true)
      } else {
        setIsAuthorized(false)
      }

      if (setAuthorizedValue) setAuthorizedValue(isPermited)

      if (setLoading) setLoading(false)
    }

    if (userPermissions !== null) checkPermission()
  }, [])

  return (
    <Box>
      {!loading && (
        <Validate
          isValid={isAuthorized}
          redirect={redirect}
          message="Você não tem permissão"
        >
          {children}
        </Validate>
      )}
    </Box>
  )
}

export default memo(VerifyPermission)
