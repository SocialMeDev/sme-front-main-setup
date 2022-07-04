import { Fragment, memo } from 'react'
import { useRouter } from 'next/router'
import { useColorModeValue } from '@chakra-ui/react'
import { Box, ScrollView, Stack, Text, NextLink } from 'components'

import { SingleUserPlus } from 'components/Icons/Users'
import { useAuth } from 'contexts/Auth/Provider'
import UserItem from './components/UserItem'

function UserList({ pathToAccount }) {
  const { push, query, pathname } = useRouter()

  const { user, setTemporaryUser, setNewUser, userList } = useAuth()

  async function setNewMainUser(selectedUser, userIndex) {
    if (selectedUser.token_status === 'ACTIVE') {
      await setNewUser(selectedUser, userIndex)

      await push({ pathname, query: { ...query, userPosition: userIndex } })
    } else {
      await setTemporaryUser(selectedUser)

      await push(pathToAccount('/auth/accounts'))
    }
  }

  return (
    <>
      <ScrollView
        p={2}
        maxH="16rem"
        direction="column"
        borderBottom="1px solid"
        borderColor="borderColor"
      >
        <Fragment>
          {userList.map((item, index) => (
            <Box
              display={user.id !== item.id ? 'block' : 'none'}
              key={item.id}
              onClick={() => setNewMainUser(item, index)}
            >
              <UserItem user={item} index={index} />
            </Box>
          ))}

          <NextLink href={pathToAccount('/auth/pre-login')}>
            <Stack
              p={4}
              w="100%"
              direction="row"
              align="center"
              as="button"
              _hover={{ bg: useColorModeValue('gray.100', 'gray.600') }}
            >
              <SingleUserPlus />
              <Text>Adicionar conta</Text>
            </Stack>
          </NextLink>
        </Fragment>
      </ScrollView>
    </>
  )
}

export default memo(UserList)
