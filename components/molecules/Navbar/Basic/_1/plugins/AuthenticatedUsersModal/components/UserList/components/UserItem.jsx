import { memo } from 'react'
import { HStack, Flex, Text } from '@chakra-ui/react'

import { Avatar } from 'components/atoms/Avatar/Basic'
import { capitalizeString, decodeUri } from 'utils/transforms/string'
import { cpfMask, cnpjMask } from 'utils/masks'

function UserItem({ user }) {
  return (
    <HStack
      w="100%"
      p={2}
      as="button"
      justify="space-between"
      _hover={{ bg: 'hoverBg', color: 'hoverColor' }}
    >
      <HStack justify="flex-start">
        <Avatar src={decodeUri(user.avatar)} name={user.name} />

        <Flex direction="column" align="flex-start">
          <Text>{capitalizeString(user.name || user.social_name)}</Text>
          <Text>{cpfMask(user.cpf_number) || cnpjMask(user.cnpj_number)}</Text>
        </Flex>
      </HStack>

      {user.token_status !== 'ACTIVE' && (
        <Flex pb={5}>
          <Text color="weakText">Desconectado</Text>
        </Flex>
      )}
    </HStack>
  )
}

export default memo(UserItem)
