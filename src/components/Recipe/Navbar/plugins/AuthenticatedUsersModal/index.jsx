import { memo, useCallback, Fragment } from 'react'
import { useRouter } from 'next/router'

import {
  Stack,
  Button,
  Modal,
  ModalContent,
  ModalBody,
  Avatar
} from 'components'
import { getAppUrl } from 'utils/helpers/sirVariables'
import { useDisclosure } from 'hooks'
import PersonHeader from './components/Header'
import UserList from './components/UserList'
import {
  capitalizeString,
  getFormattedAvatarUrl
} from 'utils/transforms/string'
import { useAuth } from 'contexts/Auth/Provider'

function AuthenticatedUsersModal({ query }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { user } = useAuth()
  const { push } = useRouter()

  if (!user.id) {
    return <Fragment />
  }

  const auth = getAppUrl('auth')

  const pathToAccount = useCallback(
    (urlPathPrefix = '/') => {
      return {
        pathname: `${auth}${urlPathPrefix}`,
        query
      }
    },
    [query]
  )

  return (
    <>
      <Avatar
        onClick={onOpen}
        as="button"
        _hover={{ outlineColor: 'primary' }}
        src={getFormattedAvatarUrl(user)}
        alt={`Avatar do ${capitalizeString(user.name)}`}
        name={user.name}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent maxW={['95%', '35%']}>
          <ModalBody p={0}>
            <PersonHeader onClose={onClose} />

            <UserList pathToAccount={pathToAccount} onClose={onClose} />

            <Stack w="100%" p={4} justify="center" direction="row">
              <Button onClick={() => push(pathToAccount('/account'))}>
                Acessar contas
              </Button>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default memo(AuthenticatedUsersModal)
