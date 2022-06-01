import { memo } from 'react'
import { useRouter } from 'next/router'
import { Button, Text, VStack } from '@chakra-ui/react'

import { getAppUrl } from 'utils/helpers/sirVariables'
import { Avatar } from 'components/atoms/Avatar/Basic'
import { useAuth } from 'contexts/Auth/Provider'
import { decodeUri } from 'utils/transforms/string'
import useUserInformation from 'hooks/useUserInformation'

function PersonHeader({ customQuery, onClose }) {
  const { push } = useRouter()
  const { logout } = useAuth()

  const { getFullName, getLogin, getAvatar } = useUserInformation()

  async function disconnectUser() {
    onClose()

    await logout()

    await push({
      pathname: getAppUrl('auth'),
      query: customQuery
    })
  }

  return (
    <VStack w="100%" py="4" borderBottom="1px solid" borderColor="borderColor">
      <VStack>
        <Avatar size="lg" src={decodeUri(getAvatar())} name={getFullName()} />

        <VStack spacing={0}>
          <Text>{getFullName()}</Text>
          <Text>{getLogin()}</Text>
        </VStack>

        <Button onClick={disconnectUser}>Desconectar</Button>
      </VStack>
    </VStack>
  )
}

export default memo(PersonHeader)
