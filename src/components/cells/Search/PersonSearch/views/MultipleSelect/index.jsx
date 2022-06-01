import { useState } from 'react'
import {
  Box,
  Flex,
  Stack,
  Button,
  Text,
  Heading,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  Checkbox,
  CheckboxGroup
} from '@chakra-ui/react'

import { Avatar } from 'components/atoms/Avatar/Basic'
import { cpfMask, cnpjMask } from 'utils/masks'

export default function Select({
  closeDrawer,
  informations,
  onSubmitSelect,
  selectDefaultValue,
  setView,
  subtitles,
  title,
  users
}) {
  const [selectedUsers, setSelectedUsers] = useState(selectDefaultValue || [])

  return (
    <>
      <DrawerHeader className="drawer-header">
        <Box>
          {subtitles?.select && <Text>{subtitles?.select}</Text>}
          <Heading>{title}</Heading>
        </Box>
      </DrawerHeader>
      <DrawerBody>
        <Box>
          <CheckboxGroup
            colorScheme="green"
            defaultValue={selectDefaultValue}
            onChange={(values) => setSelectedUsers(values)}
          >
            <Stack spacing={[1, 5]} direction={['column']}>
              {users.map((user) => (
                <Flex
                  key={user.id}
                  border="1px solid"
                  rounded="md"
                  borderColor="gray.50"
                  p={4}
                  gap={4}
                >
                  <Checkbox value={user.id.toString()} />
                  {informations?.avatar && (
                    <Avatar name={user.name} src={user.avatar_public_url} />
                  )}

                  <Box>
                    {informations?.name && <Text>{user.name}</Text>}
                    {informations?.cpf_number && user?.cpf_number && (
                      <Text>{cpfMask(user?.cpf_number)}</Text>
                    )}
                    {informations?.cnpj_number && user?.cnpj_number && (
                      <Text>{cnpjMask(user?.cnpj_number)}</Text>
                    )}
                  </Box>
                </Flex>
              ))}
            </Stack>
          </CheckboxGroup>
        </Box>
      </DrawerBody>
      <DrawerFooter className="drawer-footer">
        <Button variant="ghost" onClick={closeDrawer}>
          Cancelar
        </Button>
        <Button onClick={() => setView('search')}>Fazer outra busca</Button>
        <Button
          variant="solid"
          onClick={() => onSubmitSelect(selectedUsers)}
          disabled={!selectedUsers.length > 0}
        >
          Próximo
        </Button>
      </DrawerFooter>
    </>
  )
}
