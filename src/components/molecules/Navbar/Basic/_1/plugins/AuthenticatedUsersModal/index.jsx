import { memo, Fragment } from 'react'
import { useRouter } from 'next/router'
import {
  HStack,
  Box,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent
} from '@chakra-ui/react'

import Card from './components/Card'
import PersonHeader from './components/Header'
import UserList from './components/UserList'
import { Avatar } from 'components/atoms/Avatar/Basic'
import { getAppUrl } from 'utils/helpers/sirVariables'
import { capitalizeString } from 'utils/transforms/string'
import { useAuth } from 'contexts/Auth/Provider'
import useUser from 'hooks/useUserInformation'

function AuthenticatedUsersModal({ customQuerys }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { user } = useAuth()
  const { push } = useRouter()
  const { hasUser } = useUser()
  const visible = hasUser()

  if (!visible) {
    return <Fragment />
  }

  return (
    <>
      <HStack onClick={onOpen} as="button">
        <Avatar
          src={user.avatar_public_url}
          alt={`Avatar do ${capitalizeString(user.name)}`}
          name={user.name}
        />
      </HStack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW={['95%', '30%']}>
          <Card>
            <Box>
              <PersonHeader onClose={onClose} />

              <UserList customQuerys={customQuerys} onClose={onClose} />

              <HStack w="100%" p={4} justify="center">
                <Button
                  size="sm"
                  onClick={() =>
                    push({
                      pathname: getAppUrl('auth'),
                      query: customQuerys
                    })
                  }
                >
                  Acessar contas
                </Button>
              </HStack>
            </Box>
          </Card>
        </ModalContent>
      </Modal>
    </>
  )
}

export default memo(AuthenticatedUsersModal)
