import { memo } from 'react'
import { useColorModeValue } from '@chakra-ui/react'

import { Avatar, Stack, Flex, Text } from 'components'
import {
  capitalizeString,
  getFormattedAvatarUrl
} from 'utils/transforms/string'
import { cpfMask } from 'utils/masks'

function UserItem({ user }) {
  return (
    <Stack
      direction="row"
      w="100%"
      as="button"
      justify="space-between"
      p={2}
      _hover={{ bg: useColorModeValue('gray.100', 'gray.600') }}
    >
      <Stack direction="row" align="center">
        <Avatar src={getFormattedAvatarUrl(user)} />

        <Flex direction="column" align="flex-start">
          <Text>{capitalizeString(user.name)}</Text>
          <Text variant="secondary">{cpfMask(user.cpf_number)}</Text>
        </Flex>
      </Stack>

      {user.token_status !== 'ACTIVE' && (
        <Text variant="secondary">Desconectado</Text>
      )}
    </Stack>
  )
}

export default memo(UserItem)
