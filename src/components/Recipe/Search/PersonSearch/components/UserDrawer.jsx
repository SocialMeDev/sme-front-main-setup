import { memo } from 'react'
import {
  Box,
  Button,
  Text,
  Heading,
  DrawerBody,
  DrawerFooter,
  DrawerHeader
} from 'components'

function UserDrawer({ closeDrawer, subtitles, title }) {
  return (
    <>
      <DrawerHeader>
        <Box>
          {subtitles?.search && <Text>{subtitles?.search}</Text>}
          <Heading color="primary">{title}</Heading>
        </Box>
      </DrawerHeader>
      <DrawerBody>
        <Heading>Alo Você</Heading>
      </DrawerBody>
      <DrawerFooter>
        <Button variant="ghost" onClick={closeDrawer}>
          Cancelar
        </Button>
        <Button variant="solid" type="submit">
          Pesquisar
        </Button>
      </DrawerFooter>
    </>
  )
}

export default memo(UserDrawer)
