import { useState } from 'react'
import { useColorModeValue } from '@chakra-ui/react'

import {
  Avatar,
  Box,
  Flex,
  Stack,
  Button,
  Text,
  Heading,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  RadioGroup,
  Radio,
  EmptyData
} from 'components'
import { getFormattedAvatarUrl } from 'utils/transforms/string'
import { cpfMask, cnpjMask } from 'utils/masks'

export default function Select({
  closeDrawer,
  informations,
  onSubmitSelect,
  overlayType,
  selectDefaultValue,
  setView,
  subtitles,
  title,
  users
}) {
  const [selectedUser, setSelectedUser] = useState(selectDefaultValue || [])

  return (
    <>
      <DrawerHeader>
        <Box>
          {subtitles?.select && <Text>{subtitles?.select}</Text>}
          <Heading color="primary">{title}</Heading>
        </Box>
      </DrawerHeader>
      <DrawerBody bg="bgContainer">
        {users.length === 0 ? (
          <EmptyData
            title="Ninguém encontrado"
            description="Sua busca não retornou nenhum usuário"
          >
            <Button variant="solid" onClick={() => setView('search')}>
              Fazer outra busca
            </Button>
          </EmptyData>
        ) : (
          <Box h={overlayType === 'drawer' ? 'auto' : '50vh'}>
            <RadioGroup
              colorScheme="green"
              defaultValue={selectDefaultValue}
              value={selectedUser}
              onChange={(values) => setSelectedUser(values)}
            >
              <Stack spacing={[1, 5]} direction={['column']} pb={4}>
                {users.map((user) => (
                  <Flex
                    bg="bgContent"
                    key={user.id}
                    border="1px solid"
                    rounded="md"
                    borderColor="primary.100"
                    p={4}
                    align="center"
                    gap={4}
                    cursor="pointer"
                    onClick={() => setSelectedUser(user.id.toString())}
                    _hover={{
                      bg: useColorModeValue('primary.50', 'primary.600')
                    }}
                  >
                    <Radio value={user.id.toString()} />
                    {informations?.avatar && (
                      <Avatar
                        name={user.name}
                        src={getFormattedAvatarUrl(user)}
                      />
                    )}

                    <Box>
                      {informations?.name && (
                        <Text variant="primary">{user.name}</Text>
                      )}
                      {informations?.cpf_number && user?.cpf_number && (
                        <Text variant="secondary">
                          {cpfMask(user?.cpf_number)}
                        </Text>
                      )}
                      {informations?.cnpj_number && user?.cnpj_number && (
                        <Text variant="secondary">
                          {cnpjMask(user?.cnpj_number)}
                        </Text>
                      )}
                    </Box>
                  </Flex>
                ))}
              </Stack>
            </RadioGroup>
          </Box>
        )}
      </DrawerBody>
      <DrawerFooter>
        <Button variant="ghost" onClick={closeDrawer}>
          Cancelar
        </Button>
        <Button onClick={() => setView('search')}>Fazer outra busca</Button>
        <Button
          variant="solid"
          onClick={() => onSubmitSelect(selectedUser)}
          disabled={!selectedUser.length > 0}
        >
          Próximo
        </Button>
      </DrawerFooter>
    </>
  )
}
