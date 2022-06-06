import { memo, useMemo } from 'react'
import {
  NextLink,
  Heading,
  IconButton,
  Image,
  Drawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Flex,
  SimpleGrid,
  Text
} from 'components'
import { useDisclosure } from 'hooks'
import { getAppUrl } from 'utils/helpers/sirVariables'
import { GridLayout10 } from 'components/Icons/Interface'

function SocialMeModulesButton() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const modules = useMemo(() => {
    return [
      {
        href: getAppUrl('profile'),
        imageURL: '/images/brands/profile.png',
        name: 'Perfil'
      },
      {
        href: getAppUrl('citizen'),
        imageURL: '/images/brands/profile.png',
        name: 'Me cidadão'
      }
    ]
  }, [])

  return (
    <>
      <IconButton
        aria-label="Modulos da Social Me"
        variant="ghost"
        icon={<GridLayout10 />}
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Heading>Módulos Social Me</Heading>
          </DrawerHeader>
          <Box p={3}>
            <SimpleGrid columns={3} spacing={2}>
              {modules.map((item) => (
                <NextLink key={item.name} href={item.href}>
                  <Flex
                    p={1}
                    gap={2}
                    borderRadius={4}
                    direction="column"
                    justify="center"
                    align="center"
                    transition="all 0.4s"
                    _hover={{
                      bg: 'primary',
                      color: 'light'
                    }}
                  >
                    <Image src={item.imageURL} alt={item.name} boxSize="32px" />
                    <Text>{item.name}</Text>
                  </Flex>
                </NextLink>
              ))}
            </SimpleGrid>
          </Box>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default memo(SocialMeModulesButton)
