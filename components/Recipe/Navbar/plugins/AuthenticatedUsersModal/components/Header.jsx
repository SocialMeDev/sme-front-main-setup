import { memo } from 'react'
import { useRouter } from 'next/router'

import { Button, Text, Stack, Avatar } from 'components'
import { useAuth } from 'contexts/Auth/Provider'
import { decodeUri } from 'utils/transforms/string'
import useUserInformation from 'hooks/useUserInformation'

function PersonHeader({ onClose }) {
  const { push } = useRouter()
  const { logout } = useAuth()

  const { getFullName, getLogin, getAvatar } = useUserInformation()

  async function disconnectUser() {
    onClose()

    await logout()

    await push('/')
  }

  return (
    <Stack
      w="100%"
      align="center"
      py={2}
      borderBottom="1px solid"
      borderColor="borderColor"
      spacing={1}
    >
      <Avatar size="xl" src={decodeUri(getAvatar())} name={getFullName()} />

      <Stack align="center" spacing={0}>
        <Text>{getFullName()}</Text>
        <Text variant="secondary">{getLogin()}</Text>
      </Stack>

      <Button
        onClick={disconnectUser}
        bg="danger"
        variant="solid"
        _hover={{
          bg: 'dangerHover'
        }}
      >
        Desconectar
      </Button>
    </Stack>
  )
}

export default memo(PersonHeader)
