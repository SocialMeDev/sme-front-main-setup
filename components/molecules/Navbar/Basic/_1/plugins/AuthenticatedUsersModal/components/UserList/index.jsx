import { memo } from 'react'
import { useRouter } from 'next/router'
import { Box, Flex, HStack, Text } from '@chakra-ui/react'

import { LinkWrapper } from 'components/atoms/Link/Basic'
import { getAppUrl } from 'utils/helpers/sirVariables'
import { SingleUserPlus } from 'components/atoms/Icons/Users'
import { useAuth } from 'contexts/Auth/Provider'
import UserItem from './components/UserItem'

function UserList({ customQuerys }) {
  const { push, query, pathname, reload } = useRouter()

  const { user, setTemporaryUser, setNewUser, userList } = useAuth()

  async function setNewMainUser(selectedUser, userIndex) {
    if (selectedUser.token_status === 'ACTIVE') {
      await setNewUser(selectedUser, userIndex)

      query.userPosition = userIndex

      await push({ pathname, query })

      reload()
    } else {
      await setTemporaryUser(selectedUser)

      await push({
        pathname: `${getAppUrl('auth')}/auth/accounts`,
        query: customQuerys
      })
    }
  }

  return (
    <>
      <Flex
        w="100%"
        p={[2, 4]}
        maxH="250px"
        direction="column"
        borderBottom="1px solid"
        borderColor="borderColor"
        overflowY="auto"
        gap={[2, 4]}
      >
        {userList.map((item, index) => (
          <Box
            display={user.id !== item.id ? 'block' : 'none'}
            key={item.id}
            onClick={() => setNewMainUser(item, index)}
          >
            <UserItem user={item} index={index} />
          </Box>
        ))}

        <LinkWrapper
          href={{
            pathname: `${getAppUrl('auth')}/auth/pre-login`,
            query: customQuerys
          }}
        >
          <HStack
            minH="50px"
            p={2}
            rounded="md"
            cursor="pointer"
            transition="all 0.4s"
            _hover={{ bg: 'hoverBg', color: 'hoverColor' }}
          >
            <SingleUserPlus />
            <Text>Adicionar conta</Text>
          </HStack>
        </LinkWrapper>
      </Flex>
    </>
  )
}

export default memo(UserList)
